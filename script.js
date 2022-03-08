const quadro = document.querySelector('#pixel-board');
const pallet = document.querySelector('#color-palette');
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
    black = object.getPropertyValue('backgroundColor');
}
}





















// const pallet = document.querySelector('#color-palette');
// const palletBlack = document.querySelector('#d1');
// const palletBlueviole = document.querySelector('#d2');
// const palletChartreuse = document.querySelector('#d3');
// const palletAqua = document.querySelector('#d4');
// const quadro = document.querySelector('#pixel-board');
// const pixels = document.getElementsByClassName('pixel');


// function selectedColor (event){
//     let classSelect = document.querySelector('.selected')[0];

//     event.target.classList.toggle('selected');
//     if(classSelect){
//         classSelect.classList.remove('selected');
//     }
//     event.target.classList.add('selected');
// }
// pallet.addEventListener('click', selectedColor );


// function pullBlack (event){
//     event.target.style.backgroundColor = 'black'
// }

// pixels.addEventListener('click', pullBlack);

// window.onload = pullBlack();

// function pullColor (event){
//     let classSelect = document.getElementsByClassName('selected')[0];

//     if(classSelect === palletBlack){
//         event.style.target.background = 'black'
//     } else if (classSelect === palletBlueviole){
//         event.style.target.background = 'blueviole';
//     } else if(classSelect === palletChartreuse){
//         event.style.target.background = 'chartreuse';
//     } else if (classSelect === palletAqua){
//         event.style.target.background = 'aqua';
//     }

// }
// palletBlack.addEventListener('click', pullColor);

// function mudeColor(event){
//     event.target.classList.add('selected');
// }
// pixels.addEventListener('click', mudeColor);

