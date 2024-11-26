const container = document.createElement("div");
const gridSize = document.querySelector("#gridSize");
const div = document.querySelector("div");

function createGrid(){
    div.appendChild(container)
    container.classList.add("container");
    let size = prompt("Enter size for grid");
    
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    
    for (let i=0; i<size*size; i++){
        const gridSquare = document.createElement("div");
        gridSquare.classList.add("grid");
        
        gridSquare.style.width = `${600/size}px`;
        gridSquare.addEventListener("mouseover", ()=>{
            gridSquare.style.backgroundColor = "blue";
        });
        
        gridSquare.addEventListener("mouseleave", ()=>{
            gridSquare.style.backgroundColor = "white";
        });
        container.appendChild(gridSquare);
    }
}

gridSize.addEventListener("click", createGrid);