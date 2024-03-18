const gridBtn = document.querySelector(".grid-btn");
const gridCont = document.querySelector(".grid-container");

let gridSize = 0;
let grid;

gridBtn.addEventListener("click", () => {
    gridSize = +prompt("Enter a grid size");
    if (grid) {
        grid.forEach((item) => {
            item.remove();
            console.log("removed");
        });
    }
    console.log(gridSize);
    for (let i = 0; i < gridSize * gridSize; i++) {
        let div = document.createElement("div");
        div.classList.add("grid-el");
        div.style.height = `${600 / gridSize}px`;
        div.style.width = `${600 / gridSize}px`;
        console.log(div);
        gridCont.appendChild(div);
    }
    grid = document.querySelectorAll(".grid-el");

    grid.forEach((item) => {
        console.log("done");
    });
});
