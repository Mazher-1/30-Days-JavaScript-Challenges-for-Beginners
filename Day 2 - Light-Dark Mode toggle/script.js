// Get the button element from the DOM
const modeButton = document.getElementById('modeButton');

// Variable to track the current mode
let isDarkMode = false;

// Function to toggle between light and dark mode
function toggleMode() {
    if (!isDarkMode) {
        // If not in dark mode, switch to dark mode
        document.documentElement.style.setProperty('--bg-color', 'black');
        document.documentElement.style.setProperty('--text-color', 'white');
        modeButton.textContent = 'Switch to Light Mode';  // Update button text
    } else {
        // If in dark mode, switch to light mode
        document.documentElement.style.setProperty('--bg-color', 'white');
        document.documentElement.style.setProperty('--text-color', 'black');
        modeButton.textContent = 'Switch to Dark Mode';  // Update button text
    }
    isDarkMode = !isDarkMode;  // Toggle the mode state
}

// Add an event listener to the button
modeButton.addEventListener('click', toggleMode);
