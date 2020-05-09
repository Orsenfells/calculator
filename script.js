
function clearDisplay(){
    display.innerHTML = "";
    testArray = [];
    hold = "";
}
function backButton(){
    if(display.innerHTML[display.innerHTML.length - 1] === " "){
        display.innerHTML = display.innerHTML.substr(0, display.innerHTML.length - 3);
        console.log("thing");
    } else display.innerHTML = display.innerHTML.substr(0, display.innerHTML.length - 1);
    console.log("buck");
}
// left off here, back button clears display, but gotta mull over how
// to apply it to the array and hold respectively
// might be able to change it so the array is formed when the = sign is pressed
// separated by spaces. gonna have to think it over.
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
    if((array.some(multiply) && array.indexOf("*") < array.indexOf("/")) || (array.indexOf("/") === -1 && array.some(multiply))){
        let operator = array.indexOf("*");
        array.splice((operator - 1), 3, parseInt(array[operator - 1]) * parseInt(array[operator + 1]));
        i = 0;
    } else if(array.some(divide)){
        let operator = array.indexOf("/");
        array.splice((operator - 1), 3, parseInt(array[operator - 1]) / parseInt(array[operator + 1]));
        i = 0;
    } else if((array.some(add) && array.indexOf("+") < array.indexOf("-")) || (array.indexOf("-") === -1 && array.some(add))){
            let operator = array.indexOf("+");
            console.log(array);
            array.splice((operator - 1), 3, parseInt(array[operator - 1]) + parseInt(array[operator + 1]));
            i = 0;
        } 
       else if (array.some(sub)) {
            let operator = array.indexOf("-");
            array.splice((operator - 1), 3, parseInt(array[operator - 1]) - parseInt(array[operator + 1]));
             i = 0;
             console.log("wtf");
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

let hold = "";
let operand;
let testArray = [];
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
