const gun = document.querySelector(".gun");

let mousePos = {
  x: 0,
  y: 0,
};

let gunPos = {
  x: gun.offsetLeft,
  y: gun.offsetTop,
};

document.addEventListener("mousemove", (e) => {
  mousePos.x = e.clientX;
  mousePos.y = e.clientY;

  let deltaX = mousePos.x - gunPos.x;
  let deltaY = mousePos.y - gunPos.y;

  let angle = Math.atan2(deltaY, deltaX);
  angle = angle + Math.PI / 2;
  gun.style.transform = `rotate(${angle}rad)`;
});

// make bullet
const bullet = document.querySelector(".bullet");
const bulletPos = {
  x: bullet.offsetLeft,
  y: bullet.offsetTop,
};
