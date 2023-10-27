function appendToDisplay(value) {
    document.getElementById('result').value += value;
}

function clearDisplay() {
    document.getElementById('result').value = '';
}

function calculate() {
    let expression = document.getElementById('result').value;
    if (expression) {
        expression = expression.replace('x', '*');
        document.getElementById('result').value = eval(expression);
    }
}
