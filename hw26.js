`use strict`;

//task 1
function getFactorial(a) {
    if (a === 1 || a === 0) {
        return a;
    }
    return a * getFactorial(a - 1);
}

console.log(getFactorial(4));

//task 2
function pow(num, degree) {
    if (degree === 1) {
        return num;
    }
    return num * pow(num, degree - 1);
}

console.log(pow(2, 4));

//task 3

function sum(a, b) {
    if (b === 0) {
        return a;
    }
    return sum(++a, --b);
}

console.log(sum(2, 8));