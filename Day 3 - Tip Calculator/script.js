// Javascript
// Get DOM elements
const billAmount = document.getElementById('billAmount');
const tipPercentage = document.getElementById('tipPercentage');
const numPeople = document.getElementById('numPeople');
const calculateButton = document.getElementById('calculateButton');
const resultDisplay = document.getElementById('resultDisplay');

// Function to calculate the tip per person
function calculateTip() {
    const bill = parseFloat(billAmount.value);  // Get bill amount as a number
    const tip = parseFloat(tipPercentage.value) / 100;  // Convert tip percentage to decimal
    const people = parseInt(numPeople.value);  // Get number of people as a number

    // Validate inputs
    if (isNaN(bill) || isNaN(tip) || isNaN(people) || people <= 0) {
        resultDisplay.textContent = "Please enter valid inputs!";
        return;
    }

    // Calculate total per person
    const totalPerPerson = (bill + bill * tip) / people;

    // Update result display
    resultDisplay.textContent = `Total per person: $${totalPerPerson.toFixed(2)}`;
}

// Add an event listener to the button to calculate the tip
calculateButton.addEventListener('click', calculateTip);
