"use strict";
/**
 * Functions
 */
function add(a, b) {
    return a + b;
}
function sub(a, b) {
    return a + b;
}
console.log(add(5, 10)); // Output: 15
console.log(sub(5, 10)); // Output: -5
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // Output: 15
/**
 * Return type function
 */
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero");
    }
    return a / b;
}
const result = divide(10, 2);
