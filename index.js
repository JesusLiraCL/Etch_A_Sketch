const container = document.querySelector("#container");
const gridSize = document.querySelector("#gridSize");
const bar = document.querySelector(".bar");
const colorPicker = document.createElement("div");
//const colorPicker = document.createElement("div");
const colors = ["red", "blue", "green", "black", "white"]
let colorPicked = "white";

colors.forEach(elem =>{
    const colorDiv = document.createElement("div");
    colorDiv.classList.add("color");
    colorDiv.style.backgroundColor = `${elem}`;
    colorPicker.appendChild(colorDiv);
});

colorPicker.style.display = "flex";
bar.appendChild(colorPicker);

function createGrid(){
    container.classList.add("container");
    let size = prompt("Enter size for grid");
    
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    
    for (let i=0; i<size*size; i++){
        const gridSquare = document.createElement("div");
        gridSquare.classList.add("grid");
        gridSquare.style.width = `${500/size}px`;

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