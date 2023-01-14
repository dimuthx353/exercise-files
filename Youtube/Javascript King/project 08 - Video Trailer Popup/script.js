const closeEl = document.querySelector('.close');
const btnEl = document.querySelector('.btn');
const VideoEl = document.querySelector('video');
const trailerContainerEl = document.querySelector('.trailer-container');

btnEl.addEventListener('click', () => {
  trailerContainerEl.classList.remove('active');
});

closeEl.addEventListener('click', () => {
  trailerContainerEl.classList.add('active');
  VideoEl.pause();
  VideoEl.currentTime = 0;
});
