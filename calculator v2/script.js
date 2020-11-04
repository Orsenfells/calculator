let calculator = (() => {
    let add = (a, b) => a + b;
    let subtract = (a, b) => a - b;
    let multiply = (a, b) => a * b;
    let divide = (a, b) => a / b;
    return {add, subtract, multiply, divide}
})()
let operate = (op, a, b) => {
    if (op == '+') {
        return calculator.add(a, b)
    }  
    if (op == '-') {
        return calculator.subtract(a, b)
    } 
    if (op == '*') {
        return calculator.multiply(a,b)
    }
    if (op == '/') {
        return calculator.divide(a, b)
    }
}

let populateDisplay = (() => {
    let operationDisplay = document.getElementById('operation-display');
    let numbers = document.querySelectorAll('.num');
    let operators = document.querySelectorAll('.operator');
    let calcOperation = [];
    let regex = /\*+|\/+|\++|\-+/
    numbers.forEach(element => element.addEventListener('click', function(e) {
        operationDisplay.textContent += element.textContent;
        calcOperation += element.textContent; 
    }))
    operators.forEach(element => element.addEventListener('click', function(e) {
        if(!(operationDisplay.textContent.search(regex) === -1)) {
            return
        }
        
        operationDisplay.textContent += ' ' + element.textContent + ' ';
        calcOperation += element.textContent;
    }))
    let getOperation = () => {
        return calcOperation
    }
    return {getOperation}
})()