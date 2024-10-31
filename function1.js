//  //                               function declaration
// function declaration(){
//     console.log("hello js");
// }
// declaration()


// n JavaScript, a function declaration is a way to define a function using the function keyword. Here’s how it works:

// Syntax
// javascript
// Copy code
// function functionName(parameters) {
//     // Function body
//     // Code to be executed
// }
// Explanation
// function: This keyword is used to declare a function.
// functionName: The name of the function. It should be a valid identifier.
// parameters: Optional. These are values that you can pass to the function. You can have zero or more parameters.
// function body: The code that runs when the function is called.
// Example
// Here’s a simple example of a function declaration:

// javascript
// Copy code
// function greet(name) {
//     console.log("Hello, " + name + "!");
// }

// // Calling the function
// greet("Alice"); // Outputs: Hello, Alice!
// Key Points
// Function Hoisting: Function declarations are hoisted, which means you can call the function before it is declared in the code.

// javascript
// Copy code
// sayHello(); // This works because of hoisting

// function sayHello() {
//     console.log("Hello!");
// }
// Multiple Parameters: You can define a function with multiple parameters.

// javascript
// Copy code
// function add(a, b) {
//     return a + b;
// }

// console.log(add(2, 3)); // Outputs: 5
// No Return Value: If you don’t explicitly return a value, the function returns undefined by default.

// Summary
// A function declaration is a way to define a function in JavaScript that allows you to encapsulate reusable code. It can take parameters, perform operations, and return a value.























// //                                function expression



// const expression =function (){
//     console.log("function expression")
// }
// expression();
//A function expression defines a function and assigns it to a variable. The function can be named or anonymous.

const functionName = function(parameters) {
    // Function body
};
// Function expressions are a way to define functions and assign them to variables.
// They can be anonymous or named.
// They are not hoisted, meaning you must define them before using them.
// They are versatile and can be passed as arguments or invoked immediately











// //                                      arrow function
//                      Simplify your function with clearner syntax and automatic this binding

const add =(a,b)=>a+b;
console.log(add(12,24));
const sub=(x,y)=>x-y;
console.log(sub(12,3));

// const arrow =()=>{
//     console.log("arrow function");
// }
// arrow();


//Arrow functions are a concise way to write function expressions using the => syntax. They were introduced in ES6 (ECMAScript 2015).

// const functionName = (parameters) => {
//     // Function body
// };
//Arrow functions do not have their own this context. They inherit this from the enclosing scope, which is particularly useful in callbacks and methods:

// function Counter() {
//     this.count = 0;
//     setInterval(() => {
//         this.count++; // `this` refers to the Counter instance
//         console.log(this.count);
//     }, 1000);
// }


//Arrow functions cannot be used with the new keyword, meaning you cannot create instances of them.


// Arrow functions do not have their own arguments object. You must use the rest parameter syntax (...args) if you need to access all arguments:
// javascript
// Copy code
// const myFunc = (...args) => {
//     console.log(args); // Logs all arguments
// };

// Summary
// Arrow functions provide a shorter syntax for writing functions.
// They have an implicit return for single expressions.
// They inherit this from the parent scope, making them great for callbacks.
// They cannot be used as constructors and do not have their own arguments object.
// While useful, they are not suitable for every situation, particularly where a specific this context is needed.












//                                          function generator


// function *generator(){
//     yield 20;
//     yield 30;
//     yield 40;
// }
// const gen=generator();
// console.log(gen.next() value);
// console.log(gen.next() value);
// console.log(gen.next() value);




//                              Async function


async function get(){
    try{
        let student=await getstudent()
        console.log(student)
    }
    catch(error){
        console.log(error)
    }
    
}
get();


// Async Functions in JavaScript
// Async functions are a way to write asynchronous code in a more readable and structured manner. They allow you to work with Promises using a simpler syntax, making it easier to handle asynchronous operations.

// Key Points
// Definition:

// An async function is defined using the async keyword before a function declaration or expression.
// It always returns a Promise. If the function returns a value, that value is wrapped in a resolved Promise.
// javascript
// Copy code
// async function myFunction() {
//     return "Hello, World!";
// }

// myFunction().then(console.log); // Outputs: Hello, World!
// Using await:

// Inside an async function, you can use the await keyword to pause the execution until a Promise is resolved. This allows you to write code that looks synchronous.
// await can only be used within an async function.
// javascript
// Copy code
// async function fetchData() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const data = await response.json();
//     console.log(data);
// }
// Error Handling:

// You can handle errors in async functions using try...catch blocks. This is more intuitive than using .catch() on Promises.
// javascript
// Copy code
// async function getData() {
//     try {
//         const response = await fetch('invalid-url'); // This will fail
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// }
// Returning Promises:

// If an async function returns a value, it is automatically wrapped in a resolved Promise. If an error is thrown, it returns a rejected Promise.
// javascript
// Copy code
// async function example() {
//     return "Success"; // Resolves to a Promise with the value "Success"
// }

// example().then(result => console.log(result)); // Outputs: Success
// Combining with Other Async Patterns:

// Async functions can be combined with other asynchronous patterns, such as Promise.all(), to handle multiple asynchronous operations concurrently.
// javascript
// Copy code
// async function fetchMultiple() {
//     const [posts, comments] = await Promise.all([
//         fetch('https://jsonplaceholder.typicode.com/posts'),
//         fetch('https://jsonplaceholder.typicode.com/comments')
//     ]);
//     const postsData = await posts.json();
//     const commentsData = await comments.json();
//     console.log(postsData, commentsData);
// }
// Summary
// Async functions simplify working with Promises, making asynchronous code easier to read and write.
// Use async to define a function and await to pause execution until a Promise is resolved.
// Error handling is straightforward with try...catch.
// They automatically return a Promise, which can make handling results and errors more intuitive.





//                               Anonymous function


const   a= function(){

}

// Async functions are a way to write asynchronous code in a more readable and structured manner. They allow you to work with Promises using a simpler syntax, making it easier to handle asynchronous operations.

// Key Points
// Definition:

// An async function is defined using the async keyword before a function declaration or expression.
// It always returns a Promise. If the function returns a value, that value is wrapped in a resolved Promise.
// javascript
// Copy code
// async function myFunction() {
//     return "Hello, World!";
// }

// myFunction().then(console.log); // Outputs: Hello, World!
// Using await:

// Inside an async function, you can use the await keyword to pause the execution until a Promise is resolved. This allows you to write code that looks synchronous.
// await can only be used within an async function.
// javascript
// Copy code
// async function fetchData() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const data = await response.json();
//     console.log(data);
// }
// Error Handling:

// You can handle errors in async functions using try...catch blocks. This is more intuitive than using .catch() on Promises.
// javascript
// Copy code
// async function getData() {
//     try {
//         const response = await fetch('invalid-url'); // This will fail
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// }
// Returning Promises:

// If an async function returns a value, it is automatically wrapped in a resolved Promise. If an error is thrown, it returns a rejected Promise.
// javascript
// Copy code
// async function example() {
//     return "Success"; // Resolves to a Promise with the value "Success"
// }

// example().then(result => console.log(result)); // Outputs: Success
// Combining with Other Async Patterns:

// Async functions can be combined with other asynchronous patterns, such as Promise.all(), to handle multiple asynchronous operations concurrently.
// javascript
// Copy code
// async function fetchMultiple() {
//     const [posts, comments] = await Promise.all([
//         fetch('https://jsonplaceholder.typicode.com/posts'),
//         fetch('https://jsonplaceholder.typicode.com/comments')
//     ]);
//     const postsData = await posts.json();
//     const commentsData = await comments.json();
//     console.log(postsData, commentsData);
// }
// Summary
// Async functions simplify working with Promises, making asynchronous code easier to read and write.
// Use async to define a function and await to pause execution until a Promise is resolved.
// Error handling is straightforward with try...catch.
// They automatically return a Promise, which can make handling results and errors more intuitive.



// You said:
//  Anonymous function
// ChatGPT said:
// ChatGPT
// Anonymous Functions in JavaScript
// Anonymous functions are functions that do not have a name. They are often used as arguments to other functions, as return values, or for short-lived operations.

// Key Points
// Definition:

// An anonymous function is a function that is defined without a name. It is typically used in a context where the function does not need to be referenced by name.
// javascript
// Copy code
// const myFunction = function() {
//     console.log("This is an anonymous function!");
// };
// Usage:

// As a Callback: Anonymous functions are frequently used as callbacks in methods like forEach, map, and filter.
// javascript
// Copy code
// const numbers = [1, 2, 3];
// numbers.forEach(function(num) {
//     console.log(num * 2); // Outputs: 2, 4, 6
// });
// As an Immediately Invoked Function Expression (IIFE): Anonymous functions can be executed immediately after they are defined.
// javascript
// Copy code
// (function() {
//     console.log("This runs immediately!");
// })(); // Outputs: This runs immediately!
// No Name:

// Since they do not have a name, you cannot call them directly later in the code. They exist only in the context where they are defined.
// Returning Values:

// Anonymous functions can return values just like named functions.
// javascript
// Copy code
// const sum = function(a, b) {
//     return a + b;
// };

// console.log(sum(3, 4)); // Outputs: 7
// Arrow Functions:

// Anonymous functions can also be written using the arrow function syntax, which provides a more concise way to define them.
// javascript
// Copy code
// const add = (a, b) => a + b;
// console.log(add(5, 3)); // Outputs: 8
// Summary
// Anonymous functions are functions without a name, often used for short-lived operations.
// They are commonly used as callbacks and can be executed immediately (IIFE).
// They can return values but cannot be called by name later.
// Arrow functions provide a concise syntax for writing anonymous functions.







//                                    Template literals:
//                     Easily embed variable and expression in your string


//                                  Destructuring Assigment
  //                             unpack values from array or object into variable with ease

  