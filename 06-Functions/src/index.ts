/**
 * Functions
 */
function add(a: number, b: number): number {
  return a + b;
}

function sub(a: number, b: number): number {
  return a + b;
}

console.log(add(5, 10)); // Output: 15
console.log(sub(5, 10)); // Output: -5

function sum(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // Output: 15

/**
 * Return type function
 */
function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Division by zero");
  }
  return a / b;
}
const result = divide(10, 2);
