/**
 * any type
 */

let age: any;

age = "thirty";
age = false;
age = 30;

/**
 * any type in arrays
 */

let things: any[] = ["one", 1, true, null];
things.push({ id: 1 });

/**
 * functions & any
 */
function addTogether(value: any): any {
  return value + value;
}

const result1 = addTogether("hello");
const result2 = addTogether(4.5);

/**
 * useful when migrating from js to ts
 * because using `any` won't cause errors initially
 */
