1. **🔍 What are Functions?**
   - **Description**: 
	   - Functions are blocks of code that perform specific tasks. 
	   - TypeScript allows you to define the types of parameters and return values for better type safety and clarity.

2. **✍️ Function Declaration**
   - **Description**: You can declare functions in TypeScript just like in JavaScript, but with added type annotations for parameters and return values.
   - **Syntax**:
     ```typescript
     function functionName(parameter1: Type, parameter2: Type): ReturnType {
       // function body
     }
     ```
   - **Example**:
     ```typescript
     function greet(name: string): string {
       return `Hello, ${name}!`;
     }

     console.log(greet("Anas")); // Output: Hello, Anas!
     ```

3. **🔁 Function Expressions**
   - **Description**: A function can also be stored in a variable.
   - **Example**:
     ```typescript
     const add = function (a: number, b: number): number {
       return a + b;
     };

     console.log(add(5, 10)); // Output: 15
     ```

4. **📦 Arrow Functions**
   - **Description**: Arrow functions provide a shorter syntax for writing functions.
   - **Example**:
     ```typescript
     const multiply = (x: number, y: number): number => x * y;
     console.log(multiply(5, 4)); // Output: 20
     ```

5. **📜 Optional Parameters**
   - **Description**: You can make parameters optional by using a `?` after the parameter name.
   - **Example**:
     ```typescript
     function fullName(firstName: string, lastName?: string): string {
       return lastName ? `${firstName} ${lastName}` : firstName;
     }

     console.log(fullName("Anas")); // Output: Anas
     console.log(fullName("Anas", "Hany")); // Output: Anas Hany
     ```

6. **🔢 Default Parameters**
   - **Description**: You can assign default values to parameters, which will be used if no value is passed.
   - **Example**:
     ```typescript
     function greetUser(name: string = "Guest"): string {
       return `Hello, ${name}!`;
     }

     console.log(greetUser()); // Output: Hello, Guest!
     console.log(greetUser("Anas")); // Output: Hello, Anas!
     ```

7. **🔄 Rest Parameters**
   - **Description**: Use rest parameters to handle multiple arguments as an array.
   - **Example**:
     ```typescript
     function sum(...numbers: number[]): number {
       return numbers.reduce((total, num) => total + num, 0);
     }

     console.log(sum(1, 2, 3, 4)); // Output: 10
     ```

8. **🔍 Return Types**
   - **Description**: You can explicitly define the return type of a function.
   - **Example**:
     ```typescript
     function divide(a: number, b: number): number {
       if (b === 0) {
         throw new Error("Division by zero");
       }
       return a / b;
     }

     console.log(divide(10, 2)); // Output: 5
     ```

9. **⚡ Function Overloading**
   - **Description**: TypeScript supports function overloading, which allows multiple function signatures.
   - **Example**:
     ```typescript
     function display(value: string): void;
     function display(value: number): void;
     function display(value: any): void {
       console.log(value);
     }

     display("Anas"); // Output: Anas
     display(123);    // Output: 123
     ```

10. **⚙️ `void` and `never` Return Types**
    - **`void`**: Indicates the function does not return a value.
      - **Example**:
        ```typescript
        function logMessage(message: string): void {
          console.log(message);
        }
        ```
    - **`never`**: Indicates the function never completes (throws an error or infinite loop).
      - **Example**:
        ```typescript
        function throwError(errorMsg: string): never {
          throw new Error(errorMsg);
        }
        ```

### Conclusion
- Understanding how to define and work with functions in TypeScript is crucial for building robust applications. 
- TypeScript adds strong type-checking and flexibility to functions with features like optional parameters, default values, and function overloading. 