const timeInput = document.getElementById('timeInput')
const startButton = document.getElementById('startButton')
const timeDisplay = document.getElementById('timeDisplay');


let countdown;

startButton.addEventListener('click', () => {
    let time = parseInt(timeInput.value)
    if(isNaN(time) || time <= 0){
        alert("Please enter a valid number of seconds.");
        return;
    }

clearInterval(countdown);
updateDisplay(time);
countdown = setInterval(() => {
    time -- ;
    updateDisplay(time);

    if(time <= 0){
        clearInterval(countdown);
        timeDisplay.textContent = "Time's up!"
    }
}, 1000);
});


function updateDisplay(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    timeDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

