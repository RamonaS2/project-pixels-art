const quadro = document.getElementById('pixel-board');
const pallet = document.getElementById('color-palette');
const color = document.querySelectorAll('.color');
let black = 'rgb(0, 0, 0)';

let input = document.querySelector('#board-size');
let botaoVqv = document.querySelector('#generate-board');

botaoVqv.addEventListener('click', function(){
    let inputValue = input.value;

    if(inputValue === ''){
        alert('Board inválido!');
    } else if(inputValue < 5){
        inputValue = 5;
    } else if (inputValue > 50){
        inputValue = 50;
    }
    criePixel(inputValue);
})

function criePixel (qntsPixels){
quadro.innerHTML = "";

for(let i = 0; i < qntsPixels; i +=1 ){
    let line = document.createElement('div')
    for( let j = 0; j < qntsPixels; j += 1){
        let colun = document.createElement('div');
        colun.className = 'pixel';
        line.appendChild(colun);
    }
    quadro.appendChild(line);
}
}
criePixel(5);

function pullBlack (event){
for (let index = 0; index < color.length; index+= 1) {
    if (color[index].classList[1] === 'selected'){
        color[index].classList.remove('selected');
    }
    event.target.classList.add('selected');

    const selectedColor = event.target;
    const object = window.getComputedStyle(selectedColor, null);
    black = object.getPropertyValue('background-color');

}
}
pallet.addEventListener('click', pullBlack);

function colorPixel (event){
    let pixel = document.querySelectorAll(".pixel");
    
    for (let i = 0; i < pixel.length; i += 1){
        if(event.target === pixel[i]){
            pixel[i].style.backgroundColor = black;
        } 
    }
}
quadro.addEventListener('click', colorPixel);

let botaoApaga = document.querySelector('#clear-board');

function limpaQuadro (){
    let pixel = document.querySelectorAll('.pixel');

    for (let i = 0; i < pixel.length; i += 1){
        pixel[i].style.backgroundColor = 'rgb(255,255,255)';
    }
}
botaoApaga.addEventListener('click', limpaQuadro);






