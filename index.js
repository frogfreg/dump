const btn = document.querySelector("button");
btn.addEventListener("mouseover", function() {
  let { width, height } = randomLocation();
  btn.style.left = `${width}px`;
  btn.style.top = `${height}px`;
});

btn.addEventListener("click", function() {
  btn.innerText = "You got me, cowboy";
  document.body.style.backgroundColor = "#9147FF";
});

function randomLocation() {
  let randomX = Math.floor(Math.random() * window.innerWidth);
  let randomY = Math.floor(Math.random() * window.innerHeight);

  return { width: randomX, height: randomY };
}
