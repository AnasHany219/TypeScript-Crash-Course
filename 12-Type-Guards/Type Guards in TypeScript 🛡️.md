1. **🔍 What are Type Guards?**
   - **Description**: **Type Guards** are mechanisms in TypeScript that allow you to check the type of a variable at runtime, helping to ensure type safety when working with union types or any potentially ambiguous types.
   - **Use Case**: They are especially useful when dealing with variables that could be of multiple types, enabling you to narrow down the type before performing operations on it.

2. **✍️ Basic Type Guard with `typeof`**
   - **Description**: The `typeof` operator can be used to check primitive types like `string`, `number`, and `boolean`.
   - **Example**:
     ```typescript
     function printValue(value: string | number) {
       if (typeof value === "string") {
         console.log(value.toUpperCase()); // Safe to call string methods
       } else {
         console.log(value.toFixed(2)); // Safe to call number methods
       }
     }

     printValue("Hello"); // Output: HELLO
     printValue(42);      // Output: 42.00
     ```

3. **🔄 Type Guard with `instanceof`**
   - **Description**: The `instanceof` operator checks if an object is an instance of a particular class or constructor function.
   - **Example**:
     ```typescript
     class Dog {
       bark() {
         console.log("Woof!");
       }
     }

     class Cat {
       meow() {
         console.log("Meow!");
       }
     }

     function makeSound(animal: Dog | Cat) {
       if (animal instanceof Dog) {
         animal.bark(); // Safe to call Dog methods
       } else {
         animal.meow(); // Safe to call Cat methods
       }
     }

     makeSound(new Dog()); // Output: Woof!
     makeSound(new Cat()); // Output: Meow!
     ```

4. **🌐 Type Guard with User-Defined Type Guards**
   - **Description**: You can create your own type guard functions that return a type predicate to determine the type of a variable.
   - **Example**:
     ```typescript
     interface Bird {
       fly: () => void;
     }

     interface Fish {
       swim: () => void;
     }

     function isBird(animal: Bird | Fish): animal is Bird {
       return (animal as Bird).fly !== undefined;
     }

     function makeMove(animal: Bird | Fish) {
       if (isBird(animal)) {
         animal.fly(); // Safe to call Bird methods
       } else {
         animal.swim(); // Safe to call Fish methods
       }
     }

     const bird: Bird = { fly: () => console.log("Flapping wings!") };
     const fish: Fish = { swim: () => console.log("Swimming!") };

     makeMove(bird); // Output: Flapping wings!
     makeMove(fish); // Output: Swimming!
     ```

5. **🧑‍🤝‍🧑 Type Guards with `in` Operator**
   - **Description**: The `in` operator checks if a property exists in an object, making it useful for narrowing down types based on their properties.
   - **Example**:
     ```typescript
     interface Square {
       type: "square";
       sideLength: number;
     }

     interface Circle {
       type: "circle";
       radius: number;
     }

     type Shape = Square | Circle;

     function getArea(shape: Shape): number {
       if ("sideLength" in shape) {
         return shape.sideLength ** 2; // Safe to access sideLength
       } else {
         return Math.PI * shape.radius ** 2; // Safe to access radius
       }
     }

     const square: Square = { type: "square", sideLength: 4 };
     const circle: Circle = { type: "circle", radius: 3 };

     console.log(getArea(square)); // Output: 16
     console.log(getArea(circle));  // Output: 28.2743...
     ```

6. **🛡️ Type Guards in Combination with Union Types**
   - **Description**: Type guards work well with union types, allowing you to safely handle values that could be one of several types.
   - **Example**:
     ```typescript
     type Input = string | number | boolean;

     function processInput(input: Input) {
       if (typeof input === "string") {
         console.log(`String: ${input}`);
       } else if (typeof input === "number") {
         console.log(`Number: ${input}`);
       } else {
         console.log(`Boolean: ${input}`);
       }
     }

     processInput("TypeScript"); // Output: String: TypeScript
     processInput(100);           // Output: Number: 100
     processInput(true);          // Output: Boolean: true
     ```

7. **🔁 Type Guard and Conditional Types**
   - **Description**: You can use type guards in combination with conditional types for more complex type checks.
   - **Example**:
     ```typescript
     type Item = { id: number; name: string } | { id: number; price: number };

     function getItemName(item: Item): string {
       if ("name" in item) {
         return item.name; // Safe to access name
       }
       return "Item with price"; // Default case
     }

     const itemWithName = { id: 1, name: "Apple" };
     const itemWithPrice = { id: 2, price: 20 };

     console.log(getItemName(itemWithName)); // Output: Apple
     console.log(getItemName(itemWithPrice)); // Output: Item with price
     ```

8. **⚠️ Limitations of Type Guards**
   - **Description**: While type guards enhance type safety, they are not foolproof. Ensure that you handle all possible cases to avoid runtime errors.
   - **Example**:
     ```typescript
     function handleInput(input: string | number) {
       if (typeof input === "string") {
         console.log(input.toUpperCase());
       }
       // Missing check for number could lead to runtime error
       console.log(input.toFixed(2)); // Error if input is string
     }
     ```

### Conclusion
- Type Guards in TypeScript are essential for ensuring type safety when working with union types or ambiguous types. 
- They allow developers to check and narrow down types at runtime, enabling safe and predictable code execution. 
- Using built-in operators like `typeof`, `instanceof`, and custom type guard functions can significantly enhance your TypeScript coding experience.
