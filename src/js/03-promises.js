import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
};

refs.form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  const firstDelay = Number(e.target.elements.delay.value);
  const delayStep = Number(e.target.elements.step.value);
  const amount = Number(e.target.elements.amount.value);

  createPromise(2, firstDelay);
}

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setInterval(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });

  promise
    .then(({ position, delay }) => {
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    });
}
