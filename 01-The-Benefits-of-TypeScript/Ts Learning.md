### Example Structure for TypeScript Notes

1. **📚 [Introduction to TypeScript](https://www.typescriptlang.org/docs/)**
   - What is TypeScript?
   - Benefits of using TypeScript
   - Setting up TypeScript in your project

2. **🔍 Basic Types**
   - 🅰️ `string`
   - 🔢 `number`
   - 🔵 `boolean`
   - 🗒️ `any`
   - 🎭 `void`
   - **Example Code:**
     ```typescript
     let name: string = "Anas";
     let age: number = 21;
     ```

3. **🔄 Interfaces**
   - What are interfaces?
   - Defining an interface
   - Implementing interfaces
   - **Example Code:**
     ```typescript
     interface Person {
       name: string;
       age: number;
     }

     const user: Person = {
       name: "Anas",
       age: 21
     };
     ```

4. **🧩 Functions**
   - Function types
   - Optional parameters
   - Default parameters
   - **Example Code:**
     ```typescript
     function greet(name: string, age?: number): void {
       console.log(`Hello ${name}, you are ${age} years old.`);
     }
     ```

5. **📦 Modules**
   - Exporting modules
   - Importing modules
   - **Example Code:**
     ```typescript
     export const PI = 3.14;
     import { PI } from './math';
     ```

6. **🛠️ Advanced Types**
   - Union types
   - Intersection types
   - Type assertions
   - **Example Code:**
     ```typescript
     let value: string | number;
     value = "Hello";
     value = 10;
     ```
