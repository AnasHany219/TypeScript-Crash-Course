1. **🔍 What are Union Types?**
   - **Description**: 
	   - A **Union Type** allows you to define a variable that can hold multiple types. 
	   - This means a variable can accept values of different types, providing flexibility in your code.
   - **Use Case**: Union types are useful when you want to allow a variable to hold different types of values without losing type safety.

2. **✍️ Defining Union Types**
   - **Syntax**: You define a union type using the pipe `|` symbol between the types.
   - **Example**:
     ```typescript
     type StringOrNumber = string | number;

     let value: StringOrNumber;
     value = "Hello"; // OK
     value = 42;      // OK
     // value = true; // Error: Type 'boolean' is not assignable to type 'StringOrNumber'
     ```

3. **🔄 Using Union Types in Functions**
   - **Description**: You can use union types as parameter types in functions, allowing the function to accept multiple types.
   - **Example**:
     ```typescript
     function printValue(value: string | number): void {
       console.log(value);
     }

     printValue("TypeScript"); // Output: TypeScript
     printValue(100);          // Output: 100
     ```

4. **🧑‍🤝‍🧑 Union Types with Interfaces**
   - **Description**: Union types can also be used in conjunction with interfaces to allow objects to take on different shapes.
   - **Example**:
     ```typescript
     interface Cat {
       type: "cat";
       meow: () => void;
     }

     interface Dog {
       type: "dog";
       bark: () => void;
     }

     type Pet = Cat | Dog;

     const myPet: Pet = {
       type: "cat",
       meow: () => console.log("Meow!"),
     };

     // Use the object
     if (myPet.type === "cat") {
       myPet.meow(); // Output: Meow!
     }
     ```

5. **🔄 Handling Union Types with Type Guards**
   - **Description**: You can use type guards to check the type of a variable at runtime and safely handle different types.
   - **Example**:
     ```typescript
     function handlePet(pet: Pet): void {
       if (pet.type === "cat") {
         pet.meow(); // Safe to call meow
       } else {
         pet.bark(); // Safe to call bark
       }
     }
     ```

6. **🌟 Union Types with Arrays**
   - **Description**: You can create arrays that contain elements of different types using union types.
   - **Example**:
     ```typescript
     let mixedArray: (string | number)[] = ["Hello", 42, "World"];
     console.log(mixedArray); // Output: ['Hello', 42, 'World']
     ```

7. **🔗 Nested Union Types**
   - **Description**: You can nest union types to create more complex structures.
   - **Example**:
     ```typescript
     type Shape = 
       | { kind: "circle"; radius: number }
       | { kind: "square"; side: number };

     function getArea(shape: Shape): number {
       if (shape.kind === "circle") {
         return Math.PI * shape.radius ** 2;
       } else {
         return shape.side ** 2;
       }
     }

     const circle: Shape = { kind: "circle", radius: 10 };
     const square: Shape = { kind: "square", side: 5 };

     console.log(getArea(circle)); // Output: 314.159...
     console.log(getArea(square));  // Output: 25
     ```

8. **❗ Limitations of Union Types**
   - **Description**: While union types provide flexibility, they can also lead to potential pitfalls, such as runtime errors if you forget to handle a specific type.
   - **Example**:
     ```typescript
     function processValue(value: string | number) {
       // If we don't check the type, we might get an error
       console.log(value.toUpperCase()); // Error: Property 'toUpperCase' does not exist on type 'number'
     }
     ```

9. **📚 Use Cases for Union Types**
   - **Description**: Common scenarios where union types are beneficial include:
     - Handling API responses that can vary in shape.
     - Creating more flexible function parameters.
     - Designing systems that require different types of objects.

10. **💡 Summary**
    - **Union Types**: Allow a variable to hold multiple types, improving code flexibility while retaining type safety.
    - **Type Guards**: Help ensure safe handling of different types within union types.

### Conclusion
- Union types in TypeScript provide a powerful mechanism for creating flexible and type-safe code. 
- They allow variables to hold multiple types while maintaining the ability to perform type checks, enabling developers to write more robust applications.