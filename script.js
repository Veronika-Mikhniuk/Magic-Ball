document.addEventListener('DOMContentLoaded', () => {
    const magicBall = document.getElementById('magicBall');
    const text = document.getElementById('text');

    const phrases = [
        "Yes, definitely!",
        "No, not now.",
        "Ask again later.",
        "Without a doubt.",
        "Most likely.",
        "Unlikely.",
        "Definitely not.",
        "Signs point to yes."
    ];

    magicBall.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * phrases.length);
        text.textContent = phrases[randomIndex];
    });
});