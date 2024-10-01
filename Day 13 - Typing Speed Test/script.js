// Sentences array to choose a random sentence from
const sentences = [
    "The quick brown fox jumps over the lazy dog.",
    "JavaScript is an essential language for web development.",
    "Artificial intelligence is shaping the future of technology.",
    "Practice makes perfect in coding and problem solving.",
];

// Selecting elements from the HTML by their IDs
const sentenceElement = document.getElementById('sentence');
const inputElement = document.getElementById('input');
const timeElement = document.getElementById('time');
const wpmElement = document.getElementById('wpm');
const restartButton = document.getElementById('restart');

// Variables to store time and other data
let startTime, endTime;
let timerRunning = false; // To track if the timer has started
let selectedSentence = ""; // Will store the selected random sentence

// Function to select a random sentence from the array
function getRandomSentence() {
    return sentences[Math.floor(Math.random() * sentences.length)];
}

// Function to start the timer
function startTimer() {
    startTime = new Date().getTime(); // Get the current time in milliseconds
    timerRunning = true; // Mark the timer as running
}

// Function to end the timer and calculate the results
function endTimer() {
    endTime = new Date().getTime(); // Get the end time in milliseconds
    const timeTaken = (endTime - startTime) / 1000; // Calculate the time taken in seconds
    const wordsTyped = inputElement.value.split(' ').length; // Count the number of words typed
    const wpm = (wordsTyped / timeTaken) * 60; // Calculate Words Per Minute (WPM)

    // Display the results
    timeElement.textContent = `Time Taken: ${timeTaken.toFixed(2)} seconds`;
    wpmElement.textContent = `WPM: ${wpm.toFixed(2)}`;
}

// Event listener to track typing and start the timer
inputElement.addEventListener('input', () => {
    if (!timerRunning) {
        startTimer(); // Start the timer when the user starts typing
    }
    // If the typed sentence matches the selected sentence, stop the timer
    if (inputElement.value === selectedSentence) {
        endTimer(); // End the timer and calculate results
    }
});

// Function to reset the test
function resetTest() {
    selectedSentence = getRandomSentence(); // Get a new random sentence
    sentenceElement.textContent = selectedSentence; // Display the new sentence
    inputElement.value = ''; // Clear the input field
    timeElement.textContent = ''; // Clear the time result
    wpmElement.textContent = ''; // Clear the WPM result
    timerRunning = false; // Reset the timer status
}

// Event listener for the restart button
restartButton.addEventListener('click', resetTest);

// Initialize the test on page load
resetTest();
