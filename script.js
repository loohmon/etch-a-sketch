const grid = document.querySelector('.grid-container')
const cell = document.querySelector('.cell')
const clear = document.querySelector('.clear')
const rainbow = document.querySelector('.rainbow')
const black = document.querySelector('.black')

createGrid = function() {
    for (let i = 0; i < 256; i++) {
        const divs = document.createElement("div");
        divs.classList.add("cell");
        divs.addEventListener('mouseover', randomColor);
        grid.appendChild(divs);
    }
}

createGrid();

// function black(e) {
//     e.target.style.backgroundColor = 'black';
// }

function randomColor(e) {
    e.target.style.backgroundColor = 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ')';
}