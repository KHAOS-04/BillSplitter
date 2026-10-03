// app.js

// Get the elements from the HTML page.
const billInput = document.querySelector("#bill");
const peopleInput = document.querySelector("#people");
const tipInput = document.querySelector("#tip");
const serviceInput = document.querySelector("#service");

const button = document.querySelector("#calc");
const result = document.querySelector("#result");

// Thank-you messages for Task 2.
const messages = [
    "Thank you for using Bill Splitter!",
    "Thanks for splitting the bill with us! 🌷",
    "Gin tunan ko gid ni sir\n-Kia",
    "Have a great day! 😊",
];

// This function does the bill calculation.
function splitBill(clearInputs = false) {
    // Read the typed values and turn them into numbers.
    const bill = Number(billInput.value);
    const people = Number(peopleInput.value);
    const tipPct = Number(tipInput.value);
    const serviceCharge = Number(serviceInput.value);

    // Check if the important input is valid.
    if (bill <= 0 || people < 1) {
        result.textContent = "Please enter a bill and at least 1 person.";
        return;
    }

    // The tip and service charge are added to the bill.
    const tipAmount = bill * (tipPct / 100);
    const total = bill + tipAmount + serviceCharge;

    // Calculate the amount for each person.
    const perPerson = total / people;

    // Task 1: Round each person's share up to the nearest peso.
    const roundedShare = Math.ceil(perPerson);

    // Task 2: Choose a random thank-you message.
    const randomMessage =
        messages[Math.floor(Math.random() * messages.length)];

    // Show the result.
    result.innerHTML =
        `<strong>Each person pays PHP ${roundedShare}</strong><br>` +
        `Total: PHP ${total.toFixed(2)}<br>` +
        `Tip: ${tipPct}% | Service charge: PHP ${serviceCharge.toFixed(2)}<br>` +
        `<span>${randomMessage}</span>`;

    // Task 3: Clear the inputs after showing the result.
    // Quick-tip buttons call splitBill(false), so they can still recalculate.
    if (clearInputs) {
        billInput.value = "";
        peopleInput.value = "";
        tipInput.value = "";
        serviceInput.value = "";
    }
}

// Main button calculates and then clears the inputs.
button.addEventListener("click", () => {
    splitBill(true);
});

// Quick Tip buttons.
// They fill in the tip percentage and calculate immediately.
document.querySelector("#tip10").addEventListener("click", () => {
    tipInput.value = 10;
    splitBill(false);
});

document.querySelector("#tip15").addEventListener("click", () => {
    tipInput.value = 15;
    splitBill(false);
});

document.querySelector("#tip20").addEventListener("click", () => {
    tipInput.value = 20;
    splitBill(false);
});
