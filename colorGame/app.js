const squares = document.querySelectorAll('.square');
const container = document.querySelector('#container');
const btnReset = document.querySelector('#reset');

function randomColor() {
  const string = '1234567890ABCDEF';
  let hex = '#';
  for (i = 0; i < 6; i++) {
    const randomNumber = Math.floor(Math.random() * string.length);
    hex += string[randomNumber];
  }
  return hex;
}
function setSquaresColors() {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = randomColor();
  }
}

function resetGame(e) {
  setSquaresColors();
  //   console.log('reset');
  const pickedNumber = pickNumber();
  console.log(pickedNumber + 1, '= picked number');
  for (let i = 0; i < 6; i++) {
    squares[i].id = i;
    squares[i].addEventListener('click', function (e) {
      e.target.id == pickedNumber
        ? (console.log('right'), console.log('You won the game'), restartGame())
        : (console.log('Wrong'), (e.target.style.display = 'hidden'));
      // console.log(typeof e.target.id);
    });
  }
}

function restartGame() {
  init();
}

function pickNumber() {
  const rndNumb = Math.floor(Math.random() * 6);
  return rndNumb;
}

//Listeners
function init() {
  btnReset.addEventListener('click', resetGame);
  document.addEventListener('DOMContentLoaded', resetGame);
}
init();
pickNumber();
// console.log(pickNumber());
