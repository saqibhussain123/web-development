// fetch('https://jsonplaceholder.typicode.com/todos')
// .then(data=>data.json)
// .then(data=>document.write(data))
// .catch(err=>document.write(err))


// fetch('https://jsonplaceholder.typicode.com/todos')
// .then(data=>data.json)
// .then(data=>document.write(data))
// .catch(Error=>document.write(Error));

//The .then() method is part of the Promise API in JavaScript, which is commonly used for handling asynchronous operations like fetching data from an API. Here’s how to use it step-by-step:

// Basic Structure
// Fetch Data: Use the fetch() function to make a request to the API.
// Handle the Response: Use .then() to process the response.
// Convert to JSON: Often, you need to convert the response to JSON format using .json().
// Handle the Data: Use another .then() to work with the data.
// Catch Errors: Use .catch() to handle any errors that may occur during the fetch operation.

fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Call .json() as a function
  })
  .then(data => {
    // Create a list to display the todos
    const todoList = document.createElement('ul');
    data.forEach(todo => {
      const listItem = document.createElement('li');
      listItem.textContent = `${todo.id}: ${todo.title} (Completed: ${todo.completed})`;
      todoList.appendChild(listItem);
    });
    document.body.appendChild(todoList); // Append the list to the document body
  })
  .catch(error => {
    document.write(`Error: ${error.message}`);
  });

//   Call .json() as a function: Changed data.json to data.json().
//   Error Handling: Added a check for the response status.
//   Formatted Output: Created a list to display each todo item properly.


// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(data=>data.json)

// .then(data=>document.write(data))
// .catch((err)=>{
//     console.log(err)
// })




// let obj=[

//     {
        
//     }
// ]
fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => {
    // Check if the response is okay (status code 200-299)
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Convert the response to JSON
  })
  .then(data => {
    // Handle the data (e.g., display it)
    console.log(data); // Log the data to the console
    data.forEach(todo => {
      console.log(`${todo.id}: ${todo.title} (Completed: ${todo.completed})`);
    });
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch
    console.error('Fetch error:', error);
  });




//   fetch('url'): This starts the request to the API.
//   First .then(response => {...}):
//   Checks if the response is valid.
//   Converts the response to JSON.
//   Second .then(data => {...}):
//   Receives the parsed data.
//   You can manipulate or display the data here.
//   .catch(error => {...}):
//   Catches any errors that may occur in the fetch or processing steps.
//   Summary
//   Using .then() helps manage asynchronous operations smoothly by allowing you to handle responses in a clear, readable way. Always remember to include error handling with .catch() to manage potential issues effectively.






// fetch('url'): Initiates a request to the specified API endpoint.
// First .then(response => {...}):
// Checks if the response is valid (using response.ok).
// If the response is not okay, it throws an error, which is caught by the .catch() method.
// If it is okay, it converts the response to JSON.
// Second .then(data => {...}):
// Processes the data received from the API.
// .catch(error => {...}):
// This block catches any errors that occur in the promise chain.
// It can handle network errors, issues with converting the response to JSON, or any custom errors you throw.
// Summary
// Using .catch() is crucial for robust error handling in your API calls. It ensures that if something goes wrong, your application can handle the situation gracefully rather than crashing or behaving unpredictably. Always include it when working with Promises to manage errors effectively.