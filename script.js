const form = document.getElementById("birthday-form");    // Creates a date object for the target birthday

if(form){
    form.addEventListener("submit", function(event) {   // Adds event listener for form submission
        event.preventDefault(); 
        const birthdate = document.getElementById("birthdate").value;
        localStorage.setItem("birthdate", birthdate);
        window.location.href = "countdown.html";
    });
}

const countDownElement = document.getElementById("welcome");

if (countDownElement) {

    const birthdate = localStorage.getItem("birthdate");

    if (!birthdate) {
        document.getElementById("countdown").innerText =
            "No birthday selected!";
    } else {

        const birthday = new Date(birthdate);

        const now = new Date();

        birthday.setFullYear(now.getFullYear());

        if (birthday < now) {
            birthday.setFullYear(now.getFullYear() + 1);
        }

        function updateCountdown() {

            const currentTime = new Date();

            const diff = birthday - currentTime;

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));

            const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);

            const minutes = Math.floor((diff / (1000 * 60)) % 60);

            const seconds = Math.floor((diff / 1000) % 60);

            document.getElementById("days").innerText = days;
            document.getElementById("hours").innerText = hours;
            document.getElementById("minutes").innerText = minutes;
            document.getElementById("seconds").innerText = seconds;
        }

        updateCountdown();
        setInterval(updateCountdown, 1000);
    }
}