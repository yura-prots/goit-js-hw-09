import Notiflix from 'notiflix';

const form = document.querySelector('.form');

form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  let firstDelay = Number(e.target.elements.delay.value);
  const delayStep = Number(e.target.elements.step.value);
  const amount = Number(e.target.elements.amount.value);

  for (let i = 1; i <= amount; i++) {
    createPromise(i, firstDelay).then(onFulfilled).catch(onRejected);
    firstDelay += delayStep;
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setInterval(() => {
      if (shouldResolve) {
        resolve(`Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
}

function onFulfilled(result) {
  Notiflix.Notify.success(result);
}

function onRejected(error) {
  Notiflix.Notify.failure(error);
}
