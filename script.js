
const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minEl = document.getElementById('minutes')
const secondsEl = document.getElementById('seconds')


const newYears = '1 jan 2023'


function setCountDown(){
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  
  const totalSeconds = (newYearsDate - currentDate) / 1000;

  
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minEl.innerHTML = formatTime(mins);
  secondsEl.innerHTML = formatTime(seconds);
  
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

// initial call
setCountDown();

setInterval(setCountDown, 1000);