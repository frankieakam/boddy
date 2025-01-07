// Function to start the calculator by saving the student’s name
function startCalculator() {
    const name = document.getElementById('student-name').value.trim();
    if (name === "") {
        alert("Please enter your name to proceed.");
        return;
    }

    // Store student name in local storage
    localStorage.setItem("studentName", name);
    showCalculatorScreen(name);
}

// Function to display calculator screen with a greeting
function showCalculatorScreen(name) {
    document.getElementById("welcome-screen").style.display = "none";
    document.getElementById("calculator-screen").style.display = "block";
    document.getElementById("greeting").innerText = `Hello, ${name}! Ready to calculate?`;
}

// Function to handle calculations
function calculate() {
    const input = document.getElementById('calculation-input').value;
    try {
        // Evaluate the expression with BODMAS rules
        const result = eval(input);
        document.getElementById('result').innerText = `Result: ${result}`;
    } catch (error) {
        document.getElementById('result').innerText = "Invalid expression. Please try again.";
    }
}

// Load the student’s name if already stored
window.onload = () => {
    const storedName = localStorage.getItem("studentName");
    if (storedName) {
        showCalculatorScreen(storedName);
    }
};
