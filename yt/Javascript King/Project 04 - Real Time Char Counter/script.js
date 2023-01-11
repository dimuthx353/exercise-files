const textareaEl = document.getElementById('textarea');
const totalCounterEl = document.getElementById('total-counter');
const remaingConterEl = document.getElementById('remaning-counter');

updateCounter();

textareaEl.addEventListener('keyup', () => {
  updateCounter();
});

function updateCounter() {
  totalCounterEl.innerText = textareaEl.value.length;
  remaingConterEl.innerText =
    textareaEl.getAttribute('maxLength') - textareaEl.value.length;
}
