const colorPallete = document.getElementById('color-palette');
const colors = colorPallete.children;
const pixelBoard = document.getElementById('pixel-board');
const numberOfPixels = 25;

const selectColor = (element) => {
  for (let i = 0; i < colors.length; i += 1) {
    if (colors[i].classList.contains('selected')) {
      colors[i].className = 'color';
      colors[i].innerText = '';
    }
  }
  const newElement = element;

  newElement.className = 'color selected';
  newElement.innerHTML = '&checkmark;';
};

for (let i = 0; i < colors.length; i += 1) {
  const colorSelected = () => { selectColor(colors[i]); };
  colors[i].addEventListener('click', colorSelected);
  const numbers = [Math.floor(Math.random() * 255) + 1, Math.floor(Math.random() * 255) + 1, Math.floor(Math.random() * 255) + 1];
  colors[i].style.backgroundColor = `rgb(${numbers[0]}, ${numbers[1]}, ${numbers[2]})`;
}

const changeColor = (target) => {
  const newTarget = target;
  newTarget.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
};

for (let i = 0; i < numberOfPixels; i += 1) {
  const pixel = document.createElement('div');
  pixel.className = 'pixel';
  const colorChange = () => (changeColor(pixel));
  pixel.addEventListener('click', colorChange);
  pixelBoard.appendChild(pixel);
}

const cleanBoard = () => {
  let pixels = document.getElementsByClassName('pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = '#FFF';
  }
}

const changePalette = () => {
  for (let i = 0; i < colors.length; i += 1) {
    colors[i].style.backgroundColor = `rgb(${Math.floor(Math.random() * 255) + 1}, ${Math.floor(Math.random() * 255) + 1}, ${Math.floor(Math.random() * 255) + 1})`;
}
};
