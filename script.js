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