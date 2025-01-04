document.getElementById('start-button').addEventListener('click', function () {
    
    const targetDate = document.getElementById('target-date').value;
    if (!targetDate) {
        alert('Please select a valid date and time.');
        return;
    }

    const targetTime = new Date(targetDate).getTime();
    const messageElement = document.getElementById('message');
    messageElement.textContent = "";
    let audio;

    const interval = setInterval(function () {
        const currentTime = new Date().getTime();
        const remainingTime = targetTime - currentTime;

        if (remainingTime <= 0) {
            clearInterval(interval);
            messageElement.textContent = "Countdown complete!";
            audio = new Audio("alarm.wav");
            audio.play();
            document.addEventListener('click' , StopAlarm)
            return;
        }

        const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours;
        document.getElementById('minutes').textContent = minutes;
        document.getElementById('seconds').textContent = seconds;
    }, 1000);

    // To stop the alarm 
    function StopAlarm(){
        if (audio){
            audio.pause();
            audio.currentTime = 0;
        }
        document.removeEventListener('click' , StopAlarm)
    }
});
