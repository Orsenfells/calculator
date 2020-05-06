
function clearDisplay(){
    display.innerHTML = "";
    firstNumber = 0;
    secondNumber = "";
    operatorCheck = false;
}
function doIt(){
  //  operate(firstNumber, operand, secondNumber);
    testArray.push(hold);
    test(testArray);
}
 function operate(a, operator, b){
    b = parseInt(b);
    let answer = 0;
    switch(operator){
        case '+':  answer = a + b; break;      
        case '-':  answer = a - b; break;
        case '*':  answer = a * b; break;
        case '/':  answer = a / b; break;
    }; display.innerHTML = answer;
    receivedAnswer = true;
 }

function onDisplay(e){
    // restarts calc after receiving answer if num is pushed
    // but does not if an operator is clicked
    if(receivedAnswer || e.target.className === "operator") {
        receivedAnswer = false;
        secondNumber = "";
    }
    else if(receivedAnswer){
        clearDisplay();
        receivedAnswer = false;
    }
    const isButton = e.target.nodeName === 'BUTTON';
    if (isButton){
        if(e.target.className === "operator"){
            operatorCheck = true;
            firstNumber = parseInt(display.innerHTML);
            operand = e.target.innerHTML;
            display.innerHTML += (" " + e.target.innerHTML + " ");
            return;
        } else if(operatorCheck){
            secondNumber += e.target.innerHTML;
        }  display.innerHTML += e.target.innerHTML;
    }
    console.log(firstNumber, secondNumber, operatorCheck);
   
}
// test
function test(array){
    for(let i = 0; i < array.length;i++) {
        switch(array[i]){
            // replaces the operation in the array with the answer and restarts the loop
            case "*": array.splice((i - 1), 3, parseInt(array[i - 1]) * parseInt(array[i + 1]));
            i = 0; 
            break;
            case "/": array.splice((i - 1), 3, parseInt(array[i - 1]) / parseInt(array[i + 1]));
            i = 0;
            break;
            case "+": array.splice((i - 1), 3, parseInt(array[i - 1]) + parseInt(array[i + 1]));
            i = 0;
            break;
            case "-": array.splice((i - 1), 3, parseInt(array[i - 1]) - parseInt(array[i + 1]));
            i = 0;
            break;
        }
    }
    display.innerHTML = array[0];
    array = [];
}

function testDisplay(e){
    const isButton = e.target.nodeName === 'BUTTON';
    if(isButton){
        // if an operator is pressed updates the array with new number and the operator
        if(e.target.className === "operator"){
            testArray.push(hold)
            testArray.push(e.target.innerHTML);
            hold = "";
            display.innerHTML += (" " + e.target.innerHTML + " ");
        } 
        // stores the number to be inputted into array
        else {
            hold += e.target.innerHTML;
            display.innerHTML += e.target.innerHTML
        }
    }
    console.log(testArray);
}
let testArray = []
let hold = "";



// test
let operatorCheck = false
let firstNumber = 0;
let operand;
let receivedAnswer = false;
let secondNumber = "";
let display = document.getElementById('display');
let clear = document.getElementById("clear");
let wrapper = document.getElementById("wrapper")
let operators = document.getElementById('operators');
let equals = document.getElementById("equals");

//operators.addEventListener('click', secondNum);
wrapper.addEventListener('click', testDisplay);
clear.addEventListener('click', clearDisplay);
equals.addEventListener('click', doIt);
