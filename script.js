// Set the countdown end date
const countdownDate = new Date("2024-11-29T00:00:00").getTime();

const timerInterval = setInterval(function() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    // Calculate days, hours, minutes, and seconds remaining
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update the HTML elements with calculated values
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    // Update the estimated days remaining
    document.getElementById("daysLeft").innerText = days;

    // If the countdown has ended
    if (distance < 0) {
        clearInterval(timerInterval);
        document.querySelector(".countdown-timer").innerHTML = "Time's up!";
    }
}, 1000);
