1. **📖 What are Types?**
   - **Description**: Types are a way to define the kind of data a variable can hold. TypeScript offers a range of built-in types to enhance code safety and clarity.

2. **🔠 Primitive Types**
   - **Description**: The most basic data types in TypeScript.
   - **Types**:
     - **🅰️ `string`**: Represents `textual` data.
       - **Example**:
         ```typescript
         let greeting: string = "Hello, Anas!";
         ```
     - **🔢 `number`**: Represents numeric values (both `integers` and `floats`).
       - **Example**:
         ```typescript
         let age: number = 21;
         ```
     - **🔵 `boolean`**: Represents `true` or `false` values.
       - **Example**:
         ```typescript
         let isStudent: boolean = true;
         ```
     - **🗒️ `any`**: A flexible type that can hold any value.
       - **Example**:
         ```typescript
         let randomValue: any = 5;
         randomValue = "Now I'm a string!";
         ```
     - **🎭 `void`**: Represents the absence of a value, typically used in functions that don’t return anything.
       - **Example**:
         ```typescript
         function logMessage(message: string): void {
           console.log(message);
         }
         ```

3. **🔗 Object Types**
   - **Description**: A type that represents a collection of properties.
   - **Example**:
     ```typescript
     const person: { name: string; age: number } = {
       name: "Anas",
       age: 21,
     };
     ```

4. **🏷️ Array Types**
   - **Description**: Used to define a collection of items of the same type.
   - **Example**:
     ```typescript
     let scores: number[] = [95, 85, 76];
     let names: Array<string> = ["Alice", "Bob", "Charlie"];
     ```

5. **⚖️ Tuple Types**
   - **Description**: A fixed-length array where each element can have a different type.
   - **Example**:
     ```typescript
     let user: [string, number] = ["Anas", 21];
     ```

6. **🦸‍♂️ Enum Types**
   - **Description**: A way to define a set of named constants, which can make the code more readable.
   - **Example**:
     ```typescript
     enum Color {
       Red,
       Green,
       Blue,
     }

     let myColor: Color = Color.Green; // 1 (index of Green)
     ```

7. **🔄 Union Types**
   - **Description**: Allows a variable to hold values of multiple types.
   - **Example**:
     ```typescript
     let value: string | number;
     value = "Hello"; // Valid
     value = 42;      // Valid
     ```

8. **🔮 Intersection Types**
   - **Description**: Combines multiple types into one.
   - **Example**:
     ```typescript
     interface Person {
       name: string;
     }

     interface Employee {
       id: number;
     }

     type EmployeeDetails = Person & Employee;

     const employee: EmployeeDetails = {
       name: "Anas",
       id: 1,
     };
     ```

### Conclusion
- Understanding type basics is fundamental in TypeScript. 
- By utilizing different types, you can ensure that your code is type-safe, more readable, and less prone to errors. 
- This foundational knowledge will help you as you continue to learn and work with TypeScript.