//                                    async   and sync
// set time out is a example of async
// function inside function is called call back function
// setTimeout(function(){
//     console.log('hello js');
// },2000)
// console.log('hello word');

// api





// Difference Between Synchronous and Asynchronous Functions
// Synchronous Functions and Asynchronous Functions represent two different ways of executing code in JavaScript. Here’s a breakdown of their differences along with examples:

// Synchronous Functions
// Definition:

// Synchronous functions execute in a sequential order. Each function must complete before the next one begins.
// Blocking:

// They block the execution of subsequent code until they complete.
// Example:

// javascript
// Copy code
// function synchronousTask() {
//     console.log("Task 1 started");
//     for (let i = 0; i < 1e9; i++) {} // Simulating a time-consuming task
//     console.log("Task 1 completed");
// }

// console.log("Start");
// synchronousTask(); // This will block further execution
// console.log("End");
// Output:

// arduino
// Copy code
// Start
// Task 1 started
// Task 1 completed
// End
// Asynchronous Functions
// Definition:

// Asynchronous functions allow other code to run while waiting for an operation to complete. They do not block the execution of subsequent code.
// Non-blocking:

// They enable the program to continue executing while waiting for a response.
// Example:

// javascript
// Copy code
// function asynchronousTask() {
//     console.log("Task 1 started");
//     setTimeout(() => { // Simulating an asynchronous task
//         console.log("Task 1 completed");
//     }, 2000); // 2 seconds delay
// }

// console.log("Start");
// asynchronousTask(); // This will not block further execution
// console.log("End");
// Output:

// arduino
// Copy code
// Start
// Task 1 started
// End
// Task 1 completed
// Summary of Differences
// Execution:

// Synchronous functions execute in order, while asynchronous functions can run in the background.
// Blocking vs Non-blocking:

// Synchronous functions block further execution until they complete; asynchronous functions allow other code to run while waiting.
// Use Cases:

// Use synchronous functions for tasks that require immediate execution. Use asynchronous functions for tasks like API calls, file I/O, or timers, where waiting for a response would waste time.
// Understanding these differences helps in writing efficient and responsive applications!