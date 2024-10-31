// make a function fun1 and inside function make a object and obj give key and values
// and make a fuction fun2 call function1 obj



// function fun1(){
//     var obj ={
//         name:'saqib',
//         address:'gulshan johar karachi'
//     }
//     fun2(obj)
// }
// function fun2(e){
// console.log(e)
// }
// fun1();



// var data=[12,23,45,56,67,56,78,88,89,343,234,500];
//   var a =data.filter(function(data){
//     return a >100
// })

// console.log(a)



// var tayaba =[323,454,56,676,787,455,456,23,454]

// var hhh=tayaba.filter(function(e){
// return e>500;
// })
// console.log(hhh);



var tayaba=['saad','rehman','ali','kashif','khalid']
// tayaba.forEach(function(e){
//     document.write(e+"<br>")
// });


//                                           array reverse
// var hhh=tayaba.reverse()
// console.log(hhh)


var rr=tayaba.map(function(e){

    console.log(e);
})



// Here’s a simple explanation of the map, filter, and forEach functions in JavaScript in Roman Urdu:

// 1. map()
// Definition: map() function ek array ke har element par function apply karta hai aur ek naya array return karta hai.
// Usage: Jab aapko kisi array ke har element ko transform karna ho.
// Example:
// javascript
// Copy code
// var numbers = [1, 2, 3];
// var squared = numbers.map(function(num) {
//     return num * num; // Har number ka square leta hai
// });
// console.log(squared); // Outputs: [1, 4, 9]
// 2. filter()
// Definition: filter() function ek array ke elements ko check karta hai aur sirf unhe return karta hai jo specified condition ko meet karte hain.
// Usage: Jab aapko kisi array se kuch specific elements nikaalna ho.
// Example:
// javascript
// Copy code
// var numbers = [1, 2, 3, 4, 5];
// var evenNumbers = numbers.filter(function(num) {
//     return num % 2 === 0; // Sirf even numbers return karta hai
// });
// console.log(evenNumbers); // Outputs: [2, 4]
// 3. forEach()
// Definition: forEach() function array ke har element par ek function apply karta hai lekin koi naya array return nahi karta.
// Usage: Jab aapko sirf array ke elements par kuch operation perform karna ho.
// Example:
// javascript
// Copy code
// var numbers = [1, 2, 3];
// numbers.forEach(function(num) {
//     console.log(num); // Har number ko console par print karta hai
// });
// Summary
// map(): Har element ko transform karta hai aur ek naya array return karta hai.
// filter(): Condition ko meet karne wale elements ko nikaalta hai aur ek naya array return karta hai.
// forEach(): Har element par function apply karta hai lekin koi naya array nahi return karta.
// In functions ka istemal array ke elements ke saath kaam karne ke liye hota hai aur ye JavaScript mein bahut useful hain!