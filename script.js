const gridBtn = document.querySelector(".grid-btn");

let gridSize = 0;

gridBtn.addEventListener("click", () => {
    gridSize = prompt("Enter a grid size");
});

for (let i = 0; i < gridSize; i++) {}
