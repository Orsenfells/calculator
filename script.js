
function clearDisplay(){
    display.innerHTML = "";
    testArray = [];
    hold = "";
}
function doIt(){
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

// test
const multiply = element => element === "*"; 
const divide = element => element === "/";
const add = element => element === "+";
const sub = element => element === "-";
function test(array){
     for(let i = 0; i < array.length;i++) {
    //     switch(array[i]){
    //         // replaces the operation in the array with the answer and restarts the loop
    //         case "*": array.splice((i - 1), 3, parseInt(array[i - 1]) * parseInt(array[i + 1]));
    //         i = 0; 
    //         break;
    //         case "/": array.splice((i - 1), 3, parseInt(array[i - 1]) / parseInt(array[i + 1]));
    //         i = 0;
    //         break;
    //         case "+": array.splice((i - 1), 3, parseInt(array[i - 1]) + parseInt(array[i + 1]));
    //         i = 0;
    //         break;
    //         case "-": array.splice((i - 1), 3, parseInt(array[i - 1]) - parseInt(array[i + 1]));
    //         i = 0;
    //         break;
    //     }
    if(array.some(multiply)){
        array.splice((array.indexOf("*") - 1), 3, parseInt(array[array.indexOf("*") - 1]) * parseInt(array[array.indexOf("*")] + 1));
        i = 0;
    } else if(array.some(divide)){
        let operator = array.indexOf("/");
        array.splice((operator - 1), 3, parseInt(array[operator - 1]) / parseInt(array[operator + 1]));
        i = 0;
    } else if(array.some(add) || array.some(sub)){ 
        if(array.indexOf("+") < array.indexOf("-") || array.indexOf("-") === -1  /*array.some(add) */){
            let operator = array.indexOf("+");
            
            array.splice((operator - 1), 3, parseInt(array[operator - 1]) + parseInt(array[operator + 1]));
            i = 0;
        } 
       else {
            let operator = array.indexOf("-");
            array.splice((operator - 1), 3, parseInt(array[operator - 1]) - parseInt(array[operator + 1]));
             i = 0;
             console.log("wtf");
        }
}
}   
    display.innerHTML = array[0];
    receivedAnswer = true;
    
    hold = "";
    console.log(testArray, hold);
}

function testDisplay(e){
    const isButton = e.target.nodeName === 'BUTTON';
    if(isButton){
        if(e.target.className === "operator" && receivedAnswer){
            hold = testArray[0];
            console.log(hold);
            testArray = [];
            receivedAnswer = false
        }
        if(receivedAnswer){
            clearDisplay();
            receivedAnswer = false;
        }
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
    console.log(testArray, hold);
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
