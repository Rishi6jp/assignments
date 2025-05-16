import { quizData } from './data.js';

const content = document.querySelector('.content');
const button = document.querySelector('button');

let currentIndex = 0;
let marks = 0;

function showQuestion(index) {
  content.innerHTML = '';

  const q = quizData[index];

  const h4 = document.createElement('h4');
  h4.textContent = q.question;
  content.appendChild(h4);

  ['a', 'b', 'c', 'd'].forEach(opt => {
    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'quiz';
    input.id = opt;
    input.value = opt;

    const label = document.createElement('label');
    label.setAttribute('for', opt);
    label.textContent = q[opt];

    const wrapper = document.createElement('div');
    wrapper.appendChild(input);
    wrapper.appendChild(label);
    content.appendChild(wrapper);
  });
}

function showResult() {
  content.innerHTML = `<h3>You scored ${marks}/${quizData.length}</h3>`;
  button.textContent = 'Restart';
}

function restart() {
  currentIndex = 0;
  marks = 0;
  button.textContent = 'Submit';
  showQuestion(currentIndex);
}

button.addEventListener('click', () => {
  if (button.textContent === 'Restart') {
    restart();
    return;
  }

  const selected = document.querySelector('input[name="quiz"]:checked');
  if (!selected) {
    alert('Please select an option!');
    return;
  }

  if (selected.value === quizData[currentIndex].correct) {
    marks++;
  }

  currentIndex++;
  if (currentIndex < quizData.length) {
    showQuestion(currentIndex);
  } else {
    showResult();
  }
});

showQuestion(currentIndex);
