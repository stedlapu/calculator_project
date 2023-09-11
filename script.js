let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
buttons.forEach(button => {
    button.addEventListener('click', (e) =>{
        const buttonText = e.target.innerHTML;

        if (buttonText === '=') {
            string = evaluateExpression(string);
        } else if (buttonText === 'AC') {
            string = clearInput();
        } else if (buttonText === 'DEL') {
            string = deleteLastCharacter(string);
        } else if (buttonText === '√') {
            string = calculateSquareRoot(string);
        } else if (buttonText === 'x²') {
            string = calculateWholeSquare(string);
        } else {
            string += buttonText;
        }

        updateInput(string);
    });
});

function evaluateExpression(expression) {
    try {
        return eval(expression);
    } catch (error) {
        return "Error";
    }
}

function clearInput() {
    return "";
}

function deleteLastCharacter(inputString) {
    return inputString.substring(0, inputString.length - 1);
}

function calculateSquareRoot(inputString) {
    const number = parseFloat(inputString);
    if (!isNaN(number)) {
        return Math.sqrt(number).toString();
    }
    return inputString;
}

function calculateWholeSquare(inputString) {
    const number = parseFloat(inputString);
    if (!isNaN(number)) {
        return (number ** 2).toString();
    }
    return inputString;
}

function updateInput(value) {
    input.value = value;
}
