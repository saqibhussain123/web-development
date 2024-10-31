// function foo(){
//  var a=   document.getElementById('inp');
// var b= a.getAttribute('name');
//  console.log(b);
// }



// function foo(){
//     var a=   document.getElementById('inp');
//    var b= a.hasAttribute('class');
//     console.log(b);
//    }



// function foo(){
//     var a=   document.getElementById('inp');
//    var b= a.setAttribute('class','aaa');
//     console.log(b);
//    }



// Here’s a simple definition of getAttribute, setAttribute, and hasAttribute functions in JavaScript:

// 1. getAttribute()
// Definition: getAttribute() method kisi element ka specified attribute ka value return karta hai.
// Usage: Yeh method attribute ko read karne ke liye istemal hota hai.
// Example:
// javascript
// Copy code
// const image = document.getElementById('myImage');
// const srcValue = image.getAttribute('src'); // <img> element ka src attribute lete hain
// console.log(srcValue); // Outputs the source of the image
// 2. setAttribute()
// Definition: setAttribute() method kisi element ka specified attribute ka value set karta hai.
// Usage: Yeh method attribute ko modify ya create karne ke liye istemal hota hai.
// Example:
// javascript
// Copy code
// const image = document.getElementById('myImage');
// image.setAttribute('alt', 'A beautiful scenery'); // <img> element ka alt attribute set karte hain
// 3. hasAttribute()
// Definition: hasAttribute() method check karta hai ke element ke paas specified attribute hai ya nahi. Yeh true ya false return karta hai.
// Usage: Yeh method attribute ki existence ko check karne ke liye istemal hota hai.
// Example:
// javascript
// Copy code
// const image = document.getElementById('myImage');
// const hasSrc = image.hasAttribute('src'); // Check karte hain ke src attribute hai ya nahi
// console.log(hasSrc); // Outputs: true or false
// Summary
// getAttribute(): Element ka specified attribute ka value return karta hai.
// setAttribute(): Element ka specified attribute ka value set karta hai.
// hasAttribute(): Check karta hai ke element ke paas specified attribute hai ya nahi.
// Yeh methods DOM manipulation aur attribute handling ke liye kaafi useful hain!
