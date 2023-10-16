const gridDOMElement = document.querySelector(".grid");

const btnPlayDOMElement = document.getElementById("btn-play");

const btnResetDOMElement = document.getElementById("btn-reset")


btnPlayDOMElement.addEventListener("click", function () {
    resetGrid();
    createGrid(100);
    selectedCell();
});

btnResetDOMElement.addEventListener("click", function(){
    resetGrid();
})


let bombs = bombsGenerator(1,100,16)
console.log (bombs)


function resetGrid (){
    gridDOMElement.innerHTML = "";
}

function createGrid (num){
    for (let i = 0; i < num; i++){
        const n = i + 1;
        let cellHtml = `<div class="cell">${n}</div>`;
        gridDOMElement.innerHTML = gridDOMElement.innerHTML + cellHtml;
    };
}

function selectedCell(){
    const cellDOMElements = document.querySelectorAll(".cell");
    for (let i = 0; i < cellDOMElements.length; i++){
        const currentCell = cellDOMElements[i];
        currentCell.addEventListener("click", function(){
        const n = i + 1
        console.log(n, bombs);
        if (bombs.includes(n)){
            currentCell.classList.add("bg-red")
            alert("hai perso, per ricominciare premi su reset");
        }else{
            currentCell.classList.add("bg-blue");
        }
        })
    };
}

function bombsGenerator(rangeMin, rangeMax, number){
    const bombsArray = []

    while (bombsArray.length < number ){
        const n = getRandomIntInclusive(rangeMin, rangeMax)
        if (bombsArray.includes(n) === false){
            bombsArray.push(n)
        }
    }
    return bombsArray
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}

 function gameOver(){
    alert("hai perso"); 
}



