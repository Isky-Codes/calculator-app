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

document.getElementById('seven').addEventListener('click', () => {
    console.log('This is number seven');
});