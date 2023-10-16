const gridDOMElement = document.querySelector(".grid");

const btnPlayDOMElement = document.getElementById("btn-play");

btnPlayDOMElement.addEventListener("click", function () {
    resetGrid();
    createGrid(100);
    selectedCell();
    bombsGenerator(10,20)
});


function resetGrid (){
    gridDOMElement.innerHTML = "";
}

function createGrid (num){
    for (let i = 0; i < num; i++){
        n = i + 1;
        let cellHtml = `<div class="cell">${n}</div>`;
        gridDOMElement.innerHTML = gridDOMElement.innerHTML + cellHtml;
    };
}

function selectedCell(){
    const cellDOMElements = document.querySelectorAll(".cell");
    for (let i = 0; i < cellDOMElements.length; i++){
        const currentCell = cellDOMElements[i];
        
        currentCell.addEventListener("click", function(){
            console.log("Hai scelto il numero: " + (i + 1));
            currentCell.classList.add("bg-selected");
        })
    };
}



function bombsGenerator(rangeMin, rangeMax, number){
    getRandomIntInclusive(rangeMin, rangeMax)
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
  }