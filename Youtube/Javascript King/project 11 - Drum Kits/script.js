const kits = ['crash', 'kick', 'snare', 'tom'];
const ContainerEl = document.querySelector('.container');

kits.forEach((kit) => {
  const btnEl = document.createElement('button');
  btnEl.classList.add('btn');
  btnEl.style.backgroundImage = 'url(Images/' + kit + '.png)';
  btnEl.innerText = kit;
  ContainerEl.appendChild(btnEl);
  const audioEl = document.createElement('audio');
  audioEl.src = 'sounds/' + kit + '.mp3';
  ContainerEl.appendChild(audioEl);

  btnEl.addEventListener('click', () => {
    audioEl.play();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === kit.slice(0, 1)) {
      audioEl.play();
      btnEl.style.transform = 'scale(.9)';
      setTimeout(() => {
        btnEl.style.transform = 'scale(1)';
      }, 100);
    }
  });
});
