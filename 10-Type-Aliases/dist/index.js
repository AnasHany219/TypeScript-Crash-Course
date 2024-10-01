"use strict";
/**
 * type aliases
 */
function getRandomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return [r, g, b];
}
const color1 = getRandomColor();
const color2 = getRandomColor();
console.log(color1, color2);
const newUser = {
    name: "Anas",
    age: 21,
    isAdmin: true,
};
function formatUser(user) {
    console.log(`${user.name} is ${user.age} years old ${user.isAdmin && "and he is an admin"}`);
}
formatUser(newUser);
