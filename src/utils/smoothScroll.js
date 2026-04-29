export const scrollToSection = (e, targetId) => {
    e.preventDefault();

    const id = targetId.replace('#', '');
    const targetElement = document.getElementById(id);

    if (targetElement) {
        const headerOffset = 105;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        const startPosition = window.pageYOffset;
        const distance = offsetPosition - startPosition;

        // Duração da animação em milissegundos (1000 = 1 segundo)
        const duration = 1000;
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);

            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            } else {
                window.scrollTo(0, offsetPosition);
            }
        }

        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return (c / 2) * t * t + b;
            t--;
            return (-c / 2) * (t * (t - 2) - 1) + b;
        }
        requestAnimationFrame(animation);
    } else {
        console.warn(`Elemento com ID '${id}' não foi encontrado na página.`);
    }
};