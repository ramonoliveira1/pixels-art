/* eslint-disable max-len */
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
  pixel.style.backgroundColor = 'white';
  const colorChange = () => (changeColor(pixel));
  pixel.addEventListener('click', colorChange);
  pixelBoard.appendChild(pixel);
}

const changePalette = () => {
  for (let i = 0; i < colors.length; i += 1) {
    colors[i].style.backgroundColor = `rgb(${Math.floor(Math.random() * 255) + 1}, ${Math.floor(Math.random() * 255) + 1}, ${Math.floor(Math.random() * 255) + 1})`;
}
};

const pixelItems = document.getElementsByClassName('pixel');
const colorsStoraged = JSON.parse(localStorage.getItem('pixelBoard')) || [];

const updateColor = (index, arr) => {
  colorsStoraged[index] = arr[index].style.backgroundColor;
  localStorage.setItem('pixelBoard', JSON.stringify(colorsStoraged));
};

for (let i = 0; i < pixelItems.length; i += 1) {
  const updtColor = () => (updateColor(i, pixelItems));
  pixelItems[i].addEventListener('click', updtColor);
}

const setPixelStrgd = (index, color) => {
  pixelItems[index].style.backgroundColor = color;
};

const loadColor = () => {
  for (let i = 0; i < pixelItems.length; i += 1) {
    setPixelStrgd(i, colorsStoraged[i]);
  }
};

const cleanBoard = () => {
  for (let i = 0; i < colorsStoraged.length; i += 1) {
    colorsStoraged[i] = 'white';
  }
  localStorage.setItem('pixelBoard', JSON.stringify(colorsStoraged));
  let pixels = document.getElementsByClassName('pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = '#FFF';
  }
};

loadColor();
