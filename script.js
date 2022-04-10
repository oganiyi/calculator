let display = document.getElementById('result');

function userInput(input){
    display.value += input;
}

function calcResult(){
    display.value = eval(display.value);
}

function clearDisplay(){
    display.value = "";
}

function backspaceKey(){
    display.value = display.value.slice(0,-1);
}

function nan(){
    if(display.value == "Infinity"){
        display.value = "naN - You cannot divide by zero."
    }
}
