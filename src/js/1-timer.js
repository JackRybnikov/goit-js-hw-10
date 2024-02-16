import flatpickr from "flatpickr";
import "../../node_modules/flatpickr/dist/flatpickr.min.css";

import iziToast from "izitoast";
import "../../node_modules/izitoast/dist/css/iziToast.min.css";

const inputDate = document.querySelector("#datetime-picker");
const startBtn = document.querySelector('[data-start]');

const daysSpan = document.querySelector(".field-days .value");
const hoursSpan = document.querySelector(".field-hours .value");
const minutesSpan = document.querySelector(".field-minutes .value");
const secondsSpan = document.querySelector(".field-seconds .value");

let userSelectedDate;
const intervalIdArray = [];

startBtn.setAttribute('disabled', true);

/* Timer */

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

function spanFiller (ms) {
    let counter = ms;
    if (ms >= 0){
        const { days, hours, minutes, seconds } = convertMs(ms);

        //secondsSpan.textContent = `${seconds < 10 ? '0' + seconds : seconds.toString()}`;
        secondsSpan.textContent = `${seconds}`.padStart(2, '0');
        minutesSpan.textContent = `${minutes}`.padStart(2, '0');
        hoursSpan.textContent = `${hours}`.padStart(2, '0');
        daysSpan.textContent = `${days}`.padStart(2, '0');

        counter -= 1000;
        return counter;
    } else{
        clearInterval(intervalIdArray[0]);
        intervalIdArray.pop();
        inputDate.removeAttribute('disabled');
        return counter;
    }
}

/* Start button */

startBtn.addEventListener("click", () => {
    let counter = userSelectedDate.getTime() - Date.now();
    counter -= counter % 1000;
    const intervalId = setInterval(() => {
        counter = spanFiller(counter);
    }, 1000);
    intervalIdArray.push(intervalId);
    startBtn.setAttribute('disabled', true);
    inputDate.setAttribute('disabled', true);
});

/* flatpickr */

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    dateFormat: "Y-m-d H:i",
    minuteIncrement: 1,
    onClose(selectedDates) {
        userSelectedDate = selectedDates[0];
        if (userSelectedDate.getTime() <= Date.now()) {
            iziToast.error({
                iconUrl: '../img/Group.svg',
                backgroundColor: '#EF4040',
                messageColor: '#fff',
                position: 'topCenter',
                message: 'Please choose a date in the future'
            });
            startBtn.setAttribute('disabled', true);
        } else{
            startBtn.removeAttribute('disabled');
        }
    },
};

const fp = flatpickr("#datetime-picker", options);
