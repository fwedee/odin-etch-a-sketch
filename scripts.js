const container = document.querySelector(".container");

// initialization of grid 16 x 16
for (let i = 0; i < 256; i++) {
  let square = document.createElement("div");
  square.classList.add("square");
  square.innerText = "";
  container.appendChild(square);
}

const grids = document.querySelectorAll(".square");

grids.forEach((grid) => {
  grid.addEventListener("mouseover", () => {
    grid.classList.add("square_color_change");
  });
  grid.addEventListener("mouseleave", () => {
    grid.classList.remove("square_color_change");
  });
});
