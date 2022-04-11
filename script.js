let display = document.getElementById('result');

function userInput(input){
    display.value += input;
}

function operator(input){
    display.value += " " + input + " ";
}

function calcResult(){
    display.value = eval(display.value);
    if(display.value == Number.POSITIVE_INFINITY){
        display.value = "naN - You cannot divide by zero; +Infinity";
    }
    if(display.value == Number.NEGATIVE_INFINITY){
        display.value = "naN - You cannot divide by zero; -Infinity";
    }
}

function clearDisplay(){
    display.value = "";
}

function backspaceKey(){
    display.value = display.value.slice(0,-1);
}