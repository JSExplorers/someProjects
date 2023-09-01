const btn = document.querySelector('button');
const result = document.querySelector('#result');

const inputForms = document.querySelectorAll('input[type="text"]');

function calculate(e) {
  e.preventDefault();

  const firstName = document.getElementById('name1').value.trim();
  const secondName = document.getElementById('name2').value.trim();

  const lovePercentage = Math.floor(Math.random() * 101);
  // result.innerHTML = '';
  result.innerHTML = '';

  firstName !== '' || secondName !== ''
    ? (result.innerHTML = `&#10084;&#65039; ${firstName} and ${secondName} are %${lovePercentage} match! &#10084;&#65039; `)
    : alert('Enter both names');
  resetValues();
  lovePercentage < 40
    ? (result.innerHTML += `<br>not a great match! keep looking`)
    : 'Good! good and have sex LOL &#128516';
}

function resetValues() {
  document.getElementById('name1').value = '';
  document.getElementById('name2').value = '';
}

btn.addEventListener('click', calculate);

inputForms.forEach((input) => {
  input.addEventListener('focusin', function () {
    input.style.border = '2px solid rgba(216, 64, 158, 0.684)';
  });
});

inputForms.forEach((input) => {
  input.addEventListener('focusout', function () {
    input.style.border = '';
  });
});
