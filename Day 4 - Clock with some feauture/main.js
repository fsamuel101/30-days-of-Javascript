const buttons = document.querySelectorAll('.btn');
const response = document.querySelectorAll('.response');
let selectedResponse = null;

buttons.forEach((button, index) => {
  button.addEventListener('click', (e) => {
    if (selectedResponse) {
      selectedResponse.classList.remove('surface');
    }

    if (index === 0) {
      response[0].classList.add('surface');
      selectedResponse = response[0];
    } else if (index === 1) {
      response[1].classList.add('surface');
      selectedResponse = response[1];
    } else if (index === 2) {
      response[2].classList.add('surface');
      selectedResponse = response[2];
    } else if (index === 3) {
      response[3].classList.add('surface');
      selectedResponse = response[3];
    }
  });
});


const time = document.querySelector('.time');
const currentDate = document.querySelector('.date');
const weekdays = ['Sun','Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat']
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];



function getTime() {
  let currentTime = new Date(); //* this is an object for time

  let date = currentTime.getDate();
  let day = currentTime.getDay();
  let month = currentTime.getMonth();
  let year = currentTime.getFullYear();
  let hour = currentTime.getHours();
  let min = currentTime.getMinutes();
  let sec = currentTime.getSeconds();

  let ampm = (hour >= 12) ? 'PM':'AM';

  hour = (hour > 12) ? hour-12 : hour;
  hour = (hour ==0) ? 12 : hour;

  (min < 10) ? min = '0' + min: min;
  (hour < 10) ? hour = '0' + hour: hour;
  (sec < 10) ? sec = '0' + sec: sec;

  let displayTime = hour + ":" + min + ":" + sec + ' ' + ampm;
  let displayDate = weekdays[day] + ' - ' + date + ' ' + months[month] + ' ' + year;

  time.innerText = displayTime;
  currentDate.innerText = displayDate;

  setTimeout("getTime()", 1000);
}
getTime();