const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

const question = document.getElementById('question');
const form = document.getElementById('form');
const input = document.getElementById('input');
const scoreEl = document.getElementById('score');

let score = localStorage.getItem('score');

if (!score) {
  score = 0;
}

question.innerText = `what is ${num1} muliply by ${num2}?`;

const correcAns = num1 * num2;

form.addEventListener('submit', (e) => {
  const userAnswer = +input.value;
  console.log(userAnswer, typeof userAnswer);

  if (userAnswer === correcAns) {
    score++;
    console.log(score);
    updateLocalstorage();
  } else {
    score--;
    console.log(score);
    updateLocalstorage();
  }
});

function updateLocalstorage() {
  localStorage.setItem('score', JSON.stringify(score));
}

scoreEl.innerHTML = `score: ${score}`;
