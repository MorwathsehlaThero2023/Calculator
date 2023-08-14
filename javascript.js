let currentDisplay = "";

function appendNumber(number) {
  currentDisplay += number;
  updateDisplay();
}

function appendOperator(operator) {
  if (currentDisplay !== "") {
    currentDisplay += " " + operator + " ";
    updateDisplay();
  }
}

function calculate() {
  try {
    currentDisplay = eval(currentDisplay).toString();
    updateDisplay();
  } catch (error) {
    currentDisplay = "Error";
    updateDisplay();
  }
}

function clearDisplay() {
  currentDisplay = "";
  updateDisplay();
}

function updateDisplay() {
  document.getElementById("display").value = currentDisplay;
}
