/**
 * Typescript 101
 */

let myName = "anas";

/**
 * Benefits of Typescript
 */

// 1- Better error feedback
function reverse(str: string) {
  return str.split("").reverse().join("");
}
const result = reverse("hello");

// 2- Better autoComplete and code hint
const reversed = reverse("ninja");

// 3- custom types
interface MenuItem {
  title: string;
  cost: number;
}

function printMenuItem(item: MenuItem) {
  console.log(`${item.title} : ${item.cost}`);
}

// error example 1
// printMenuItem();

// error example 2
// printMenuItem({ title: "Mouse", cost: "0" });

// error example 3
// printMenuItem({ name: "Mouse", cost: 0 });

// correct example
printMenuItem({ title: "Mouse", cost: 10 });

// 4- Self-Documenting `ctrl+click`
// printMenuItem();
