const input = document.querySelector('#text');
const font1 = document.querySelector('#font1');
const font2 = document.querySelector('#font2');
const font3 = document.querySelector('#font3');
const font4 = document.querySelector('#font4');
const font5 = document.querySelector('#font5');
const font6 = document.querySelector('#font6');
const font7 = document.querySelector('#font7');

const allFonts = [font1, font2, font3, font4, font5, font6, font7];

input.addEventListener('input', function(e) {
    if (input.value === "") {
        for(let font of allFonts) {
            font.innerText = "";
        }
    } 
    else {
    for(let font of allFonts) {
        font.innerText = `${input.value}`;
        }
    }
});



