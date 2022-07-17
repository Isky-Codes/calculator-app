const buttons = document.querySelectorAll(".numBtn");
console.log(buttons);
const input = document.getElementById('displayField');


//Basic operation functions
function addNums(a, b) {
    return a + b;
}

function subtractNums(a, b) {
    return a - b;
}

function multiplyNums(a, b) {
    return a * b;
}

function divideNums(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    if(operator === '+') {
        return addNums(a, b);
    }else if(operator === '-') {
        return subtractNums(a, b);
    }else if(operator === '*') {
        return multiplyNums(a, b);
    }else if(operator === '/') {
        return divideNums(a, b);
    }else {
        return 'Enter a proper operator as a string';
    }
}

//Adds an event listener for each button to be able to input it onto the screen

for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        return input.value += this.value;
    });
}

