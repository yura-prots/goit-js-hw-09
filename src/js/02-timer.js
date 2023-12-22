import Notiflix from 'notiflix';
import flatpickr from 'flatpickr';

import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  datePiker: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('button[data-start]'),

  timerBox: document.querySelector('.timer'),
  fieldEl: document.querySelectorAll('.field'),

  days: document.querySelector('.value[data-days]'),
  hours: document.querySelector('.value[data-hours]'),
  minutes: document.querySelector('.value[data-minutes]'),
  seconds: document.querySelector('.value[data-seconds]'),
};

refs.timerBox.style = `display: flex`;

refs.fieldEl.forEach(field => {
  field.style = `
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px;
`;
});

refs.startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const futureDate = selectedDates[0];

    if (futureDate <= new Date()) {
      Notiflix.Notify.warning('Please choose a date in the future');
      return;
    }

    refs.startBtn.disabled = false;

    refs.startBtn.addEventListener('click', () => {
      setTimer(futureDate);
      refs.startBtn.disabled = true;
    });
  },
};

const fp = flatpickr('#datetime-picker', options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function dateRender(date) {
  refs.days.textContent = `${addLeadingZero(date.days)}`;
  refs.hours.textContent = `${addLeadingZero(date.hours)}`;
  refs.minutes.textContent = `${addLeadingZero(date.minutes)}`;
  refs.seconds.textContent = `${addLeadingZero(date.seconds)}`;
}

function setTimer(userDate) {
  const currentDate = new Date();
  let timeToDate = userDate - currentDate;

  const interval = setInterval(() => {
    timeToDate -= 1000;

    const convertedDate = convertMs(timeToDate);
    dateRender(convertedDate);

    if (timeToDate < 1000) {
      Notiflix.Notify.success('Time is over');

      clearInterval(interval);
    }
  }, 1000);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
