
function clearDisplay(){
    display.innerHTML = "";
    firstNumber = 0;
    secondNumber = "";
    operatorCheck = false;
}
function doIt(){
    operate(firstNumber, operand, secondNumber);
    
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
wrapper.addEventListener('click', onDisplay);
clear.addEventListener('click', clearDisplay);
equals.addEventListener('click', doIt);
