const inputBox = document.getElementById('inputBox');

function addToScreen(value) {
  inputBox.value += value;
}

function clearAll() {
  inputBox.value = '';
}

function backspace() {
  inputBox.value = inputBox.value.slice(0, -1);
}

function calculateResult() {
  try {
    inputBox.value = eval(inputBox.value);
  } catch (error) {
    inputBox.value = 'Invalid';
  }
}