import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  datePiker: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('button[data-start]'),
  daysEl: document.querySelector('.value[data-days]'),
  hoursEl: document.querySelector('.value[data-hours]'),
  minutesEl: document.querySelector('.value[data-minutes]'),
  secondsEl: document.querySelector('.value[data-seconds]'),
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

    refs.startBtn.addEventListener('click', () => {
      const currentDate = new Date();
      let timeToDate = futureDate - currentDate;

      if (timeToDate <= 0) {
        alert('Please choose a date in the future');
        return;
      }

      setInterval(() => {
        timeToDate -= 1000;
        let convertedDate = convertMs(timeToDate);
        dateRender(convertedDate);
      }, 1000);
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
  refs.daysEl.textContent = `${date.days}`;
  refs.hoursEl.textContent = `${date.hours}`;
  refs.minutesEl.textContent = `${date.minutes}`;
  refs.secondsEl.textContent = `${date.seconds}`;
}
