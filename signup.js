function signup(){
    var email= document.getElementById('seemail').value
    var password= document.getElementById('spass').value

    localStorage.setItem('email',email)
    localStorage.setItem('password',password);
    location.href='./signin.html';
}

// function signup() {
//     var email = document.getElementById('seemail').value;
//     var password = document.getElementById('spass').value;

//     // Get existing users from local storage
//     var users = JSON.parse(localStorage.getItem('users')) || [];

//     // Check if the email already exists
//     var existingUser = users.find(user => user.email === email);
//     if (existingUser) {
//         alert('Email already exists! Please use a different email.');
//         return;
//     }

//     // Add the new user to the users array
//     users.push({ email: email, password: password });

//     // Save the updated users array to local storage
//     localStorage.setItem('users', JSON.stringify(users));
    
//     // Redirect to sign-in page
//     location.href = './signin.html';
// }


function signin(){
    var email=document.getElementById('lemail').value
    var password=document.getElementById('lpass').value

    if(localStorage.getItem('email')== email && localStorage.getItem('password')==password){

        location.href='./welcome.html';
    }else{
        alert('chal nikal');
        location.href='./signup.html';
    }
}




//    JSON.stringify and JSON.parse
// JSON.parse() and JSON.stringify()
// 1. JSON.parse()
// Definition: JSON.parse() is a method that converts a JSON string into a JavaScript object.
// Usage: It is used when you receive data in JSON format (usually from an API) and need to convert it into a format you can work with in JavaScript.
// Example:
// javascript
// Copy code
// const jsonString = '{"name": "Alice", "age": 25}';
// const jsonObject = JSON.parse(jsonString);
// console.log(jsonObject.name); // Outputs: Alice
// 2. JSON.stringify()
// Definition: JSON.stringify() is a method that converts a JavaScript object into a JSON string.
// Usage: It is used when you want to send data to a server or store it in a format that can be easily transmitted (like local storage).
// Example:
// javascript
// Copy code
// const person = { name: "Bob", age: 30 };
// const jsonString = JSON.stringify(person);
// console.log(jsonString); // Outputs: {"name":"Bob","age":30}
// Summary
// JSON.parse(): Converts a JSON string to a JavaScript object.
// JSON.stringify(): Converts a JavaScript object to a JSON string.
// These methods are essential for working with JSON data in web applications!






function signup() {
    // Get the email and password input values from the form
    var email = document.getElementById('seemail').value;
    var password = document.getElementById('spass').value;

    // Retrieve existing users from local storage or initialize an empty array if none exist
    var users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the email already exists in the users array
    var existingUser = users.find(user => user.email === email);
    if (existingUser) {
        // If the email exists, alert the user and stop the signup process
        alert('Email already exists! Please use a different email.');
        return; // Exit the function
    }

    // If the email is new, add the new user to the users array
    users.push({ email: email, password: password });

    // Save the updated users array back to local storage
    localStorage.setItem('users', JSON.stringify(users));

    // Redirect the user to the sign-in page
    location.href = './signin.html';
}
