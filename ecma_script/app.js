
//                                               function scope
// var firstName="muhammad";

// {
//     var firstName ='saad'
//     console.log(firstName)
// }
// console.log(firstName)



// let firstName="muhammad";

// {
//     let firstName ='saad'
//     console.log(firstName)
// }
// console.log(firstName)


// const firstName="muhammad";

// {
//     const firstName ='saad'
//     console.log(firstName)
// }
// console.log(firstName)


//                                                        redecled or reassigned


// var abc ='muskan';
// //   var abc ='kiran';
// // abc ='kiran';
// console.log(abc);
// let xyz='muskan';

// xyz='kiran';
// console.log(xyz);

   ///                                       template literal

//    var firstName= "Noman"
//    var lastName ="shamim"

// //    var merge=firstName +" "+lastName;

//  var merge=`your first name  ${firstName} &
// your last name is  ${lastName}`
//    console.log(merge)



// function 
//                                                  default parameter

// function foo(a=12,b=3){
//  return a+b
// }
// console.log(foo(12,12))

// //                                                  rest parameter


// function doo(a,b,...rest){
 //console.log(a,b,...rest)
 // console.log(arguments)

// return a+b+rest
// }
// console.log(
//     doo(12,12,' ',100,23,54,56,56,67,78,434,454))


// function foo(a,b,...rest){
//     let num=0
//  for(let key in rest){
// console.log(rest[key])

//  num += rest[key]
// }
// console.log(a+b+num)
// }

// foo(1,2,3,4,5,6,23,45,56,56,67,76,67,67)




// Rest Parameter in JavaScript
// Rest parameter ek syntax hai jo function mein multiple arguments ko ek array ke tor par collect karne ke liye istemal hota hai. Isay ... (ellipsis) se represent kiya jata hai.

// Key Points
// Definition:

// Rest parameter function definition mein last mein use hota hai aur yeh function ke sab arguments ko ek array mein convert kar deta hai.
// Syntax:

// javascript
// Copy code
// function myFunction(...restParams) {
//     // Function body
// }
// Example:

// Aayiye ek example dekhte hain:
// javascript
// Copy code
// function sum(...numbers) {
//     let total = 0;
//     for (let num of numbers) {
//         total += num; // Sab numbers ko add karna
//     }
//     return total;
// }

// console.log(sum(1, 2, 3, 4)); // Outputs: 10
// Usage:

// Rest parameter ko functions mein flexible number of arguments lene ke liye istemal kiya jata hai.
// Limitations:

// Rest parameter ko function ke arguments ke list mein sirf last mein use kiya ja sakta hai. Is se pehle koi aur parameter nahi ho sakta.
// Summary
// Rest parameter ... syntax ke sath function mein multiple arguments ko ek array mein collect karne ke liye istemal hota hai. Yeh flexible functions banane mein madadgar hai!

