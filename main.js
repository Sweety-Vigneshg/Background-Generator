const backgroundDisplay = document.getElementById('backgroundDisplay');
const cssCode = document.getElementById('cssCode');
const generateBtn = document.getElementById('generateBtn');

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function generateBackground() {
    const color1 = getRandomColor();
    const color2 = getRandomColor();
    const gradient = `linear-gradient(to right, ${color1}, ${color2})`;
    backgroundDisplay.style.background = gradient;
    cssCode.value = `background: ${gradient};`;
}
generateBtn.addEventListener('click', generateBackground);

generateBackground();
