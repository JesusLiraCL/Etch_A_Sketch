const container = document.querySelector("#container");
const gridSize = document.querySelector("#gridSize");
const bar = document.querySelector(".bar");
const colorPicker = document.createElement("div");
//const colorPicker = document.createElement("div");
const colors = ["red", "blue", "green", "black", "white"]
let colorPicked = "white";
let isPainting = false;

colors.forEach(elem =>{
    const colorDiv = document.createElement("div");
    colorDiv.classList.add("color");
    colorDiv.style.backgroundColor = `${elem}`;

    colorDiv.addEventListener("click", ()=>{
        colorPicked = elem;
    });

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

        gridSquare.addEventListener("mousedown", ()=>{
            gridSquare.style.backgroundColor = colorPicked;
            isPainting = true;
        });

        gridSquare.addEventListener("mousemove", ()=>{
            if(isPainting){
                gridSquare.style.backgroundColor = colorPicked;
            }
        });

        gridSquare.addEventListener("mouseup", ()=>{
            isPainting = false;
        });

        container.appendChild(gridSquare);
    }
}

gridSize.addEventListener("click", createGrid);