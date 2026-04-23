const mysql = require('mysql2');
require('dotenv').config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
}).promise();

async function initDB() {
    try {
        console.log('Verificando/Criando tabelas no MySQL...');

        // 1. Tabela Clientes (Criada primeiro por causa das Foreign Keys)
        await pool.query(`CREATE TABLE IF NOT EXISTS clientes (
            id INT PRIMARY KEY AUTO_INCREMENT,
            nome VARCHAR(255),
            email VARCHAR(255) UNIQUE,
            password VARCHAR(255),
            google_id VARCHAR(255),
            foto TEXT,
            data_registo DATETIME DEFAULT CURRENT_TIMESTAMP,
            email_verificado TINYINT(1) DEFAULT 0,
            token_verificacao VARCHAR(255),
            token_expiracao BIGINT,
            role VARCHAR(20) DEFAULT 'cliente',
            reset_token VARCHAR(255) DEFAULT NULL,
            reset_token_expires BIGINT DEFAULT NULL
        )`);

        // 2. Tabela Ementa
        await pool.query(`CREATE TABLE IF NOT EXISTS ementa (
            id INT PRIMARY KEY AUTO_INCREMENT,
            semana VARCHAR(50),
            dia VARCHAR(50),
            sopa TEXT,
            prato TEXT,
            sobremesa TEXT,
            foto_index TEXT,
            foto_menu TEXT,
            foto_reservas TEXT,
            tem_gluten_free TINYINT(1) DEFAULT 0
        )`);

        // 3. Tabela Configurações
        await pool.query(`CREATE TABLE IF NOT EXISTS config (
            chave VARCHAR(100) PRIMARY KEY,
            valor TEXT
        )`);

        // 4. Tabela Reservas
        await pool.query(`CREATE TABLE IF NOT EXISTS reservas (
            id INT PRIMARY KEY AUTO_INCREMENT,
            cliente_id INT,
            nome VARCHAR(255),
            email_contacto VARCHAR(255),
            dia VARCHAR(100),
            hora VARCHAR(50),
            tipo VARCHAR(100),
            pessoas VARCHAR(50),
            pedido TEXT,
            data_pedido VARCHAR(100),
            estado VARCHAR(50) DEFAULT 'Pendente',
            FOREIGN KEY(cliente_id) REFERENCES clientes(id) ON DELETE SET NULL
        )`);

        // 6. Tabela Arquivo de Reservas
        await pool.query(`CREATE TABLE IF NOT EXISTS reservas_arquivo (
            id INT PRIMARY KEY AUTO_INCREMENT,
            cliente_id INT,
            nome VARCHAR(255),
            dia VARCHAR(100),
            hora VARCHAR(50),
            tipo VARCHAR(100),
            pessoas VARCHAR(50),
            pedido TEXT,
            data_pedido VARCHAR(100),
            data_arquivamento DATETIME DEFAULT CURRENT_TIMESTAMP,
            estado VARCHAR(50),
            FOREIGN KEY(cliente_id) REFERENCES clientes(id) ON DELETE SET NULL
        )`);

        // 7. Segurança de Login
        await pool.query(`CREATE TABLE IF NOT EXISTS login_seguranca (
            ip VARCHAR(45) PRIMARY KEY,
            tentativas INT DEFAULT 0,
            bloqueado_ate BIGINT DEFAULT 0
        )`);

        // ============================================================
        // POVOAMENTO INICIAL (SEED)
        // ============================================================
        const [rows] = await pool.query("SELECT COUNT(*) as count FROM ementa");

        if (rows[0].count === 0) {
            console.log("⚠️ Tabela ementa vazia. A criar dias da semana...");

            const diasSemana = [
                "Segunda-Feira", "Terça-Feira", "Quarta-Feira",
                "Quinta-Feira", "Sexta-Feira", "Sábado"
            ];

            for (const semana of ['atual', 'proxima']) {
                for (const dia of diasSemana) {
                    await pool.query(
                        "INSERT INTO ementa (semana, dia, sopa, prato, sobremesa, foto_index, foto_menu, foto_reservas, tem_gluten_free) VALUES (?, ?, '', '', '', '', '', '', 0)",
                        [semana, dia]
                    );
                }
            }
            console.log("✅ Dias da semana criados com sucesso no MySQL!");
        }

    } catch (err) {
        console.error('❌ Erro ao inicializar base de dados MySQL:', err.message);
    }
}
initDB();

export default pool;