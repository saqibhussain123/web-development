var getul=document.getElementById('ul');


function abc(){
  var A=  document.getElementById('inp');
//  console.log(A);
 var li =document.createElement('li');
//  console.log(li);


var litext=document.createTextNode(A.value);
// console.log(litext);

li.appendChild(litext)
// console.log(li)


getul.appendChild(li)
A.value=''
}

function deleteall(){
    getul.innerHTML=''
}





// Here’s a simple definition of createElement, createTextNode, and appendChild functions in JavaScript:

// 1. createElement()
// Definition: createElement() method ek naya HTML element create karta hai.
// Usage: Yeh method DOM (Document Object Model) mein naye elements banane ke liye istemal hota hai.
// Example:
// javascript
// Copy code
// const newDiv = document.createElement('div'); // Ek naya <div> element create kiya
// 2. createTextNode()
// Definition: createTextNode() method ek naya text node create karta hai.
// Usage: Yeh method text ko DOM mein add karne ke liye istemal hota hai.
// Example:
// javascript
// Copy code
// const newText = document.createTextNode('Hello, World!'); // Ek naya text node create kiya
// 3. appendChild()
// Definition: appendChild() method ek node ko parent node ke last mein add karta hai.
// Usage: Yeh method kisi existing element ke andar naye child elements ya nodes add karne ke liye istemal hota hai.
// Example:
// javascript
// Copy code
// const container = document.getElementById('myContainer'); // Parent element ko lete hain
// container.appendChild(newDiv); // <div> element ko container mein add karte hain
// newDiv.appendChild(newText); // Text node ko <div> ke andar add karte hain
// Summary
// createElement(): Naya HTML element create karta hai.
// createTextNode(): Naya text node create karta hai.
// appendChild(): Ek node ko parent node ke andar add karta hai.
// Yeh methods DOM manipulation ke liye bohat useful hain!


