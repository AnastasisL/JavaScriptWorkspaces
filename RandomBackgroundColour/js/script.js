let html = '';
let red;
let green;
let blue;
let randomRGB;


function randomColour() {
  red = Math.floor(Math.random() * 256);
  green = Math.floor(Math.random() * 256);
  blue = Math.floor(Math.random() * 256);
  randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
  return randomRGB;
}


for ( let i = 1; i <= 10; i++ ) {
  randomColour();
  html += `<div style="background-color: ${randomRGB}">${i}</div>`;
}



document.querySelector('main').innerHTML = html;
