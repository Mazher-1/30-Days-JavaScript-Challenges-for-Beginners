let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let interval;
const timeDisplay = document.getElementById('timeDisplay');
const lapsList = document.getElementById('lapsList');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const resetButton = document.getElementById('resetButton');
const lapButton = document.getElementById('lapButton');

function startTimer() {
    interval = setInterval(() => {
        milliseconds += 10;
        if (milliseconds === 1000) {
            milliseconds = 0;
            seconds++;
        }
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
        displayTime();
    }, 10);
}

function displayTime() {
    const formattedMilliseconds = String(Math.floor(milliseconds / 10)).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    timeDisplay.textContent = `${formattedMinutes}:${formattedSeconds}:${formattedMilliseconds}`;
}

startButton.addEventListener('click', () => {
    startTimer();
    startButton.disabled = true;
    stopButton.disabled = false;
    lapButton.disabled = false;
});

stopButton.addEventListener('click', () => {
    clearInterval(interval);
    startButton.disabled = false;
    stopButton.disabled = true;
});

resetButton.addEventListener('click', () => {
    clearInterval(interval);
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    lapsList.innerHTML = '';
    displayTime();
    startButton.disabled = false;
    stopButton.disabled = true;
    lapButton.disabled = true;
});

lapButton.addEventListener('click', () => {
    const lapTime = document.createElement('li');
    lapTime.textContent = timeDisplay.textContent;
    lapsList.appendChild(lapTime);
});
