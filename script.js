
function clearDisplay(){
    display.innerHTML = "";
    testArray = [];
    decimalFlag = false
}
function backButton(){
    if(display.innerHTML[display.innerHTML.length - 1] === " "){
        display.innerHTML = display.innerHTML.substr(0, display.innerHTML.length - 3);
        console.log("thing");
    } else if(display.innerHTML[display.innerHTML.length - 1] === "."){
        decimalFlag = false;
        display.innerHTML = display.innerHTML.substr(0, display.innerHTML.length - 1);
    } else display.innerHTML = display.innerHTML.substr(0, display.innerHTML.length - 1);
}
function doIt(){
    testArray = display.innerHTML.split(" ");
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

const multiply = element => element === "*"; 
const divide = element => element === "/";
const add = element => element === "+";
const sub = element => element === "-";
function test(array){   
    for(let i = 0; i < array.length;i++) { 
        if((array.some(multiply) && array.indexOf("*") < array.indexOf("/")) || (array.indexOf("/") === -1 && array.some(multiply))){
            let operator = array.indexOf("*");
            array.splice((operator - 1), 3, parseFloat(array[operator - 1]) * parseFloat(array[operator + 1]));
            i = 0;
        }  else if(array.some(divide)){
            let operator = array.indexOf("/");
            array.splice((operator - 1), 3, parseFloat(array[operator - 1]) / parseFloat(array[operator + 1]));
            i = 0;
        } else if((array.some(add) && array.indexOf("+") < array.indexOf("-")) || (array.indexOf("-") === -1 && array.some(add))){
            let operator = array.indexOf("+");
            console.log(array);
            array.splice((operator - 1), 3, parseFloat(array[operator - 1]) + parseFloat(array[operator + 1]));
            i = 0;
        }  else if (array.some(sub)) {
            let operator = array.indexOf("-");
            array.splice((operator - 1), 3, parseFloat(array[operator - 1]) - parseFloat(array[operator + 1]));
            i = 0;
        }
    }
    if(array[0] % 1 != 0){
        array[0] = array[0].toFixed("2");
    }   
    display.innerHTML = array[0];
    receivedAnswer = true; 
    console.log(testArray);
}

function testDisplay(e){
    const isButton = e.target.nodeName === 'BUTTON';
    if(isButton){
        // if an operator is pressed after receiving answer starts new operation 
        if(e.target.className === "operator" && receivedAnswer){            
            receivedAnswer = false
        } // clears operation if number is pressed instead and starts anew
        if(receivedAnswer){
            clearDisplay();
            receivedAnswer = false;
        }
        if(e.target.innerHTML === "." && decimalFlag){
            console.log("dang")
            return;
        }
        if(e.target.id === "decimal"){
            console.log("thihng");
            decimalFlag = true;
        }
        if(e.target.className === "operator"){
            display.innerHTML += (" " + e.target.innerHTML + " ");
            decimalFlag = false;
        } 
        // stores the number to be inputted into array
        else {
            display.innerHTML += e.target.innerHTML;
        }
    }
    console.log(testArray);
}


let operand;
let testArray = [];
let decimalFlag = false;
let receivedAnswer = false;
let undo = document.getElementById('undo');
let display = document.getElementById('display');
let clear = document.getElementById("clear");
let wrapper = document.getElementById("wrapper")
let operators = document.getElementById('operators');
let equals = document.getElementById("equals");

//operators.addEventListener('click', secondNum);
undo.addEventListener('click', backButton);
wrapper.addEventListener('click', testDisplay);
clear.addEventListener('click', clearDisplay);
equals.addEventListener('click', doIt);
