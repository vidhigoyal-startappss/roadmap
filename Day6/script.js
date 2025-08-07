let display = document.getElementById("display");

function appendNumber(num) {
  if (display.innerText === "0" || display.innerText === "Error") {
    display.innerText = num;
  } else {
    display.innerText += num;
  }
}

function appendOperator(op) {
  const lastChar = display.innerText.slice(-1);
  if ("+-*/".includes(lastChar)) {
    display.innerText = display.innerText.slice(0, -1) + op;
  } else {
    display.innerText += op;
  }
}

function clearDisplay() {
  display.innerText = "0";
}

function backspace() {
  if (display.innerText.length > 1) {
    display.innerText = display.innerText.slice(0, -1);
  } else {
    display.innerText = "0";
  }
}

function calculateResult() {
  try {
    const result = eval(display.innerText);
    if (result === Infinity || isNaN(result)) {
      display.innerText = "Error";
    } else {
      display.innerText = result;
    }
  } catch (e) {
    display.innerText = "Error";
  }
}
