const colorPallete = document.getElementById('color-palette');
const colors = colorPallete.children;

for (let i = 0; i < colors.length; i += 1) {
  colors[i].style.backgroundColor = `#${Math.floor(Math.random() * 9999) + 1}`;
}
