const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

// Function to get and show current time
const clock = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();

    // Adding 0 to single digits
    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (sec < 10) sec = '0' + sec;

    // Updating textContent
    hours.textContent = hr;
    minutes.textContent = min;
    seconds.textContent = sec;
});
