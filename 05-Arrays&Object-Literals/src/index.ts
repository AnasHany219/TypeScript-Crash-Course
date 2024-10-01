/**
 * Arrays
 */
let names: string[] = ["Anas", "Islam", "Ali"];
let ages: number[] = [21, 21, 21];

names.push("bla");
ages.push(12);

/**
 * type interface with arrays
 */

let fruits = ["apple", "banana", "cherry"];
const fruit = fruits[0]; // apple

let things = [1, true, "hello"];
const thing = things[0];

/**
 * Object Literals
 */
const person: {
  name: string;
  age: number;
  isStudent: boolean;
} = {
  name: "Anas",
  age: 21,
  isStudent: true,
};

/**
 * type interface with object literals
 */
let user = { firstName: "Anas", score: 35 };
user.firstName = "Anoos";

const score = user.score;
