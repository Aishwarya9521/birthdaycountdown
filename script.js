const birthday = new Date("2026-09-13");    // Creates a date object for the target birthday

function updateCountdown() {
    const now = new Date();     // Gets current date and time
    const diff = birthday - now;    // Calculates difference in milliseconds

    if (diff <= 0) {
        document.getElementById("message").innerText = "🎉🎂 HAPPY BIRTHDAY! 🎂🎉";     // Shows birthday message
        return;     // Stops further execution
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));      // Converts milliseconds to days
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);   // Extracts remaining hours
    const minutes = Math.floor((diff / (1000 * 60)) % 60);      // Extracts remaining minutes
    const seconds = Math.floor((diff / 1000) % 60);             // Extracts remaining seconds
    document.getElementById("days").innerText = days;           // Updates days in HTML
    document.getElementById("hours").innerText = hours;         // Updates hours
    document.getElementById("minutes").innerText = minutes;     // Updates minutes
    document.getElementById("seconds").innerText = seconds;     // Updates seconds
}
setInterval(updateCountdown, 1000);     // Keeps countdown live and updating