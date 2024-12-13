const box1 = document.querySelector(".box-1");
const box2 = document.querySelector(".box-2");
const box3 = document.querySelector(".box-3");
let rotationAngle = 0;

setInterval(() => {
  box1.style.transform = `scale(${Math.random()})`;

  rotationAngle += 90;
  box2.style.transform = `rotate(${rotationAngle}deg)`;

  box3.style.transform = `translate(${Math.random() * 50}px, ${
    Math.random() * 50
  }px)`;
}, 2000);
