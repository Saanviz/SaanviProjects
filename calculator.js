// Function to handle addition
function addNumbers() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const resultElement = document.getElementById("result");

    if (isNaN(num1) || isNaN(num2)) {
        resultElement.textContent = "Please enter valid numbers!";
        resultElement.style.color = "red";
    } else {
        const result = num1 + num2;
        resultElement.textContent = `Result: ${result}`;
        resultElement.style.color = "black";
    }
}

// Function to handle subtraction
function subtractNumbers() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const resultElement = document.getElementById("result");

    if (isNaN(num1) || isNaN(num2)) {
        resultElement.textContent = "Please enter valid numbers!";
        resultElement.style.color = "red";
    } else {
        const result = num1 - num2;
        resultElement.textContent = `Result: ${result}`;
        resultElement.style.color = "black";
    }
}

// Attach event listeners to buttons
document.getElementById("addButton").addEventListener("click", addNumbers);
document.getElementById("subtractButton").addEventListener("click", subtractNumbers);
