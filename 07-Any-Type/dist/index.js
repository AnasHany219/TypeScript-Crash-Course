"use strict";
/**
 * any type
 */
let age;
age = "thirty";
age = false;
age = 30;
/**
 * any type in arrays
 */
let things = ["one", 1, true, null];
things.push({ id: 1 });
/**
 * functions & any
 */
function addTogether(value) {
    return value + value;
}
const result1 = addTogether("hello");
const result2 = addTogether(4.5);
/**
 * useful when migrating from js to ts
 * because using `any` won't cause errors initially
 */
