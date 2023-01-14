const nextEl = document.querySelector('.next');
const preEl = document.querySelector('.pre');
const imageContainerEl = document.querySelector('.image-container');
const imgsEl = document.querySelectorAll('img');

let currentImg = 1;
let timeOut;

updateImg();

nextEl.addEventListener('click', () => {
  currentImg++;
  clearTimeout(timeOut);
  updateImg();
});

preEl.addEventListener('click', () => {
  currentImg--;
  clearTimeout(timeOut);
  updateImg();
});

function updateImg() {
  if (currentImg > imgsEl.length) {
    currentImg = 1;
  } else if (currentImg < 1) {
    currentImg = imgsEl.length;
  }

  imageContainerEl.style.transform = `translateX(-${(currentImg - 1) * 500}px)`;

  timeOut = setTimeout(() => {
    currentImg++;
    updateImg();
  }, 3000);
}
