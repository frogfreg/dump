// const colors = [
//   "red",
//   "orange",
//   "yellow",
//   "green",
//   "blue",
//   "purple",
//   "indigo",
//   "violet"
// ];
const colors = [];
const changeColor = function() {
  const h1 = document.querySelector("h1");
  h1.style.color = this.style.backgroundColor;
};
function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return { r, g, b };
}
for (let i = 0; i <= 8; i++) {
  let { r, g, b } = randomColor();
  colors.push(`rgb(${r},${g},${b})`);
}

const container = document.querySelector("#boxes");
for (let color of colors) {
  const box = document.createElement("div");
  box.style.backgroundColor = color;
  box.classList.add("box");
  container.append(box);
  box.addEventListener("click", changeColor);
}
