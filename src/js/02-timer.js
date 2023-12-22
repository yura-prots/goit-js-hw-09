import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  datePiker: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('button[data-start]'),
  days: document.querySelector('.value[data-days]'),
  hours: document.querySelector('.value[data-hours]'),
  minutes: document.querySelector('.value[data-minutes]'),
  seconds: document.querySelector('.value[data-seconds]'),
};

refs.startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const futureDate = selectedDates[0];

    refs.startBtn.disabled = false;

    refs.startBtn.addEventListener('click', setTimer(futureDate));
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
  refs.days.textContent = `${date.days}`;
  refs.hours.textContent = `${date.hours}`;
  refs.minutes.textContent = `${date.minutes}`;
  refs.seconds.textContent = `${date.seconds}`;
}

function setTimer(userDate) {
  const currentDate = new Date();
  let timeToDate = userDate - currentDate;

  if (timeToDate <= 0) {
    alert('Please choose a date in the future');
    return;
  }

  const interval = setInterval(() => {
    timeToDate -= 1000;

    let convertedDate = convertMs(timeToDate);
    dateRender(convertedDate);

    if (timeToDate < 1000) {
      clearInterval(interval);
    }
  }, 1000);
}
