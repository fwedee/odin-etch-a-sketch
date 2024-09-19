const container = document.querySelector(".container");

const sizeButton = document.querySelector(".size");
const deleteButton = document.querySelector(".delete");

function generateGrid(size) {
  for (let i = 0; i < size * size; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    let length = ((1 / size) * 100).toFixed(2) + "%";
    square.style.flexBasis = `calc(${length})`;
    container.appendChild(square);
  }

  let grids = document.querySelectorAll(".square");

  // Addition of evenListeners to grid
  grids.forEach((grid) => {
    grid.addEventListener("mouseover", () => {
      grid.classList.add("square_color_change");
    });
    grid.addEventListener("mouseleave", () => {
      //grid.classList.remove("square_color_change");
    });
  });
}

function deleteGrid() {
  let girdsUncolored = document.querySelectorAll(".square");
  let gridsColored = document.querySelectorAll(".square_color_change");

  girdsUncolored.forEach((grid) => {
    grid.remove();
  });
  gridsColored.forEach((grid) => {
    grid.remove();
  });
}

function clearGrid() {
  let gridsColored = document.querySelectorAll(".square_color_change");

  gridsColored.forEach((grid) => {
    grid.classList.remove("square_color_change");
  });
}

sizeButton.addEventListener("click", () => {
  let sizeGrid = parseInt(prompt("Enter the desired size of the grid: "));
  deleteGrid();
  generateGrid(sizeGrid);
});

deleteButton.addEventListener("click", () => {
  clearGrid();
});

generateGrid(16);
