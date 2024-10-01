/**
 * type aliases
 */

// example 01 - tuple
type Rgb = [number, number, number];

function getRandomColor(): Rgb {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return [r, g, b];
}

const color1 = getRandomColor();
const color2 = getRandomColor();
console.log(color1, color2);

// example 02 - object literal
type User = {
  name: string;
  age: number;
  isAdmin: boolean;
};

const newUser: User = {
  name: "Anas",
  age: 21,
  isAdmin: true,
};

function formatUser(user: User): void {
  console.log(
    `${user.name} is ${user.age} years old ${
      user.isAdmin && "and he is an admin"
    }`
  );
}

formatUser(newUser);
