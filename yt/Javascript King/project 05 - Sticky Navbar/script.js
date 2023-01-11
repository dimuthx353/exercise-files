const navbarEl = document.querySelector('.navbar');
const bottomContainerEl = document.querySelector('.bottom-container');
const topContainerEl = document.querySelector('.top-container');

console.log(bottomContainerEl.offsetTop);
console.log(navbarEl.offsetHeight);

window.addEventListener('scroll', () => {
  console.log(scrollY);
  if (
    window.scrollY >
    bottomContainerEl.offsetTop - navbarEl.offsetHeight - 50
  ) {
    navbarEl.classList.add('active');
  } else {
    navbarEl.classList.remove('active');
  }
});
