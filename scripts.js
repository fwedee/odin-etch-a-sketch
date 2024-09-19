const container = document.querySelector(".container");

for (let i = 0; i < 256; i++) {
  let square = document.createElement("div");
  square.setAttribute("class", "square");
  square.innerText = "test";
  container.appendChild(square);
}
