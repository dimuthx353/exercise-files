const containerEl = document.querySelector('.container');

for (let index = 0; index < 30; index++) {
  const colorContainerEl = document.createElement('div');
  colorContainerEl.classList.add('color-container');
  containerEl.appendChild(colorContainerEl);
}

randomColor();

function randomColor() {
  const Chars = '0123456789abcdef';
  const colorCodeLength = 6;
  let colorCode = '';

  for (let index = 0; index < colorCodeLength; index++) {
    const randomNum = Math.floor(Math.random() * Chars.length);
    colorCode += Chars.substring(randomNum, randomNum + 1);
    console.log(colorCode, randomNum);
  }

  return colorCode;
}

const colorContainerEls = document.querySelectorAll('.color-container');

console.log(colorContainerEls);

generateColors();

function generateColors() {
  colorContainerEls.forEach(() => {
    const newColorCode = randomColor();
    colorContainerEls.style.backgroundColor = '#' + newColorCode;
    colorContainerEls.innerText = '#' + colorCode;
  });
}
