import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const { nome, email, password } = await req.json();

        const userExists = await prisma.clientes.findUnique({
            where: { email }
        });

        if (userExists) {
            return NextResponse.json({ message: "Já existe uma conta com este email." }, { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await prisma.clientes.create({
            data: {
                nome,
                email,
                password: hashedPassword,
                role: 'cliente'
            }
        });

        return NextResponse.json({ message: "Conta criada com sucesso!" }, { status: 201 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Ocorreu um erro ao registar a conta." }, { status: 500 });
    }
}