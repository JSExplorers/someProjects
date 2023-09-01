// const btnDecrease = document.querySelector('.decrease');
// const btnIncrease = document.querySelector('.increase');
// const btnReset = document.querySelector('.reset');
// let counterValue = document.querySelector('#value');
// let count = 0;
// let counterValueNumber = Number(counterValue.firstChild.nodeValue);
// // Decrese

// function counterIncrease(e) {
//   count += 1;
//   counterValue.textContent = count;
//   count >= 1 ? (counterValue.style.color = 'green') : '';

//   return count;
//   //   console.log(count);
// }

// function counterDecrease() {
//   count -= 1;
//   counterValue.textContent = count;
//   count <= 0 ? (counterValue.style.color = 'red') : '';
//   console.log(count);

//   return count;
// }

// function counterReset() {
//   count = 0;
//   counterValue.textContent = 0;
// }

// function init() {
//   btnIncrease.addEventListener('click', counterIncrease);
//   btnDecrease.addEventListener('click', counterDecrease);
//   btnReset.addEventListener('click', counterReset);
//   counterValue.style.color = 'blue';
// }
// // console.log(count);
// init();
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');
let count = 0;

btns.forEach((btn) => {
  btn.addEventListener('click', function (e) {
    let styles = e.target.classList;

    styles.contains('increase') ? count++ : '';
    styles.contains('decrease') ? count-- : '';
    styles.contains('reset') ? (count = 0) : '';
    count === 0 ? (value.style.color = 'blue') : '';
    count > 0 ? (value.style.color = 'green') : (value.style.color = 'red');
    value.textContent = count;
    // console.log(count);
  });
});
