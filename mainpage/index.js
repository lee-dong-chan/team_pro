const slideListElem = document.getElementById("slide");
slideListElem.style.transform = `translateX(-1024px)`;
let length = 1024;
let idx = 1;
let interval;
let isMoving = false;

const move = () => {
  isMoving = true;
  slideListElem.classList.add("on");
  slideListElem.style.transform = `translateX(-${idx * length}px)`;
  setTimeout(() => {
    isMoving = false;
    slideListElem.classList.remove("on");
    if (idx == 7) {
      idx = 1;
    } else if (idx == 0) {
      idx = 6;
    }
    slideListElem.style.transform = `translateX(-${idx * length}px)`;
  }, 1000);
  //   if (idx == 7) {
  //     setTimeout(() => {
  //       idx = 1;
  //       slideListElem.style.transform = `translateX(-${idx * length}px)`;
  //     }, 1000);
  //   } else if (idx == 0) {
  //     setTimeout(() => {
  //       idx = 6;
  //       slideListElem.style.transform = `translateX(-${idx * length}px)`;
  //     }, 1000);
  //   }
};

const createIntaval = () => {
  interval = setInterval(() => {
    idx++, move();
  }, 4000);
};

createIntaval();

document.getElementById("prev").onclick = () => {
  if (isMoving) return;
  idx--;
  move();
};

document.getElementById("next").onclick = () => {
  if (isMoving) return;
  idx++;
  move();
};
