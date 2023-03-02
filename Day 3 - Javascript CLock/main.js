const time = document.getElementById('time');

function getTime() {
    let currentTime = new Date();
    let min = currentTime.getMinutes();
    let sec = currentTime.getSeconds();
    let hour = currentTime.getHours();

    (min < 10)? min = '0'+ min: min;
    (hour < 10)? hour = '0'+ hour: hour;
    (sec < 10)? sec = '0'+ sec: sec;

    let display = hour + ':' + min + ':' + sec;

    time.innerText = display
    setTimeout("getTime()", 1000);

    
}

getTime();