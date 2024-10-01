/**
 * type guards
 */

type Id = number | string;
function swapIdType(id: Id) {
  if (typeof id === "string") {
    // can use string methods
    return parseInt(id);
  } else {
    // can use number methods
    return id.toString();
  }
}
console.log(swapIdType(1), swapIdType("1"));

/**
 * tagged interface
 */

interface User {
  type: "user";
  username: string;
  email: string;
  id: Id;
}

interface Person {
  type: "person";
  firstName: string;
  age: number;
  id: Id;
}

function logDetails(value: User | Person): void {
  if (value.type === "user") console.log(value.username, value.email);
  if (value.type === "person") console.log(value.firstName, value.age);
}
