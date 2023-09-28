const colorPallete = document.getElementById('color-palette');
const colors = colorPallete.children;
const pixelBoard = document.getElementById('pixel-board');
const numberOfPixels = 25;
const colorSelectedVar = document.querySelector('.selected');

const selectColor = (element) => {
  for (let i = 0; i < colors.length; i += 1) {
    if (colors[i].classList.contains('selected')) {
      colors[i].className = 'color';
      colors[i].innerText = ''
    }
  }
  element.className = 'color selected';
  element.innerHTML = '&checkmark;';
}

for (let i = 0; i < colors.length; i += 1) {
  const colorSelected = () => {selectColor(colors[i]);}
  colors[i].addEventListener("click", colorSelected);
  colors[i].style.backgroundColor = `rgb(${Math.floor(Math.random() * 255) + 1}, ${Math.floor(Math.random() * 255) + 1}, ${Math.floor(Math.random() * 255) + 1})`;
}

const changeColor = (target) => {
  target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
}

for (let i = 0; i < numberOfPixels; i += 1) {
  let pixel = document.createElement('div');
  pixel.className = 'pixel';
  const colorChange = _ => (changeColor(pixel));
  pixel.addEventListener('click', colorChange)
  pixelBoard.appendChild(pixel);
}

const cleanBoard = _ => {
  let pixels = document.getElementsByClassName('pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = '#FFF';
  }
}

const changePalette = _ => {
  for (let i = 0; i < colors.length; i += 1) {
    colors[i].style.backgroundColor = `rgb(${Math.floor(Math.random() * 255) + 1}, ${Math.floor(Math.random() * 255) + 1}, ${Math.floor(Math.random() * 255) + 1})`;
}
}