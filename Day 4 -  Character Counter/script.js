// Get the text input area and character count display elements
const textInput = document.getElementById('textInput');
const charCountDisplay = document.getElementById('charCountDisplay');

// Set the maximum character limit
const charLimit = 100;

// Function to update character count
function updateCharCount() {
    const charCount = textInput.value.length;  // Get the current length of the text
    charCountDisplay.textContent = `Characters: ${charCount}/${charLimit}`;  // Update the display

    // If the character count exceeds the limit, turn the counter red
    if (charCount > charLimit) {
        charCountDisplay.classList.add('red');
    } else {
        charCountDisplay.classList.remove('red');
    }
}

// Add event listener to the textarea to update the character count on every key press
textInput.addEventListener('input', updateCharCount);
