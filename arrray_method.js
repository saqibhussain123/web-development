let array =[1,2,3,4,5,'saqib'];

// 1) console.log(array.length);
// 2) console.log(array.push(0));
// 3) console.log(array.unshift(7));
// 4) console.log(array.pop());
// 5) console.log(array.shift())
// 6) console.log(array.at(4))
// 7) console.log(array.indexOf(3))
// 8) console.log(array.includes('saqi'))
// 9) console.log(array.map(array),array*2);
//10) console.log(array.filter(array),array>1);
//11) console.log(array.some(array),array>0);
 // 12)console.log(array.every(array),array>2);
 // 13)console.log(array.reduce);
 //14)console.log(array.find);
 //15)console.log(array.findIndex);
 //16)console.log(array.fill(0));
// 17)console.log(array.concat([6,7,8,'ali']));
//  18)console.log(array.reverse());
//  19)console.log(array.sort());
//  20)console.log(array.join("-"));
//  21)console.log(array.flat());
//  22)console.log(array.toString());
//  23)console.log(array.toLocaleString());
 //24)console.log(array.slice(1,4));
 //25)console.log(array.splice(0,1,"ahmed"));




 console.log(array)





//  Here’s a simple definition of each of the array methods you mentioned:

// 1. at()
// Definition: The at() method returns the element at a specified index in an array. It can accept negative indices to count from the end.
// Example:
// javascript
// Copy code
// const array = [1, 2, 3, 4];
// console.log(array.at(1)); // Outputs: 2
// console.log(array.at(-1)); // Outputs: 4
// 2. map()
// Definition: The map() method creates a new array by applying a function to each element of the original array.
// Example:
// javascript
// Copy code
// const numbers = [1, 2, 3];
// const squares = numbers.map(num => num * num); // Outputs: [1, 4, 9]
// 3. filter()
// Definition: The filter() method creates a new array with all elements that pass a specified test (function).
// Example:
// javascript
// Copy code
// const numbers = [1, 2, 3, 4, 5];
// const evens = numbers.filter(num => num % 2 === 0); // Outputs: [2, 4]
// 4. some()
// Definition: The some() method tests whether at least one element in the array passes a specified test (function). Returns true or false.
// Example:
// javascript
// Copy code
// const numbers = [1, 2, 3];
// const hasEven = numbers.some(num => num % 2 === 0); // Outputs: true
// 5. every()
// Definition: The every() method tests whether all elements in the array pass a specified test (function). Returns true or false.
// Example:
// javascript
// Copy code
// const numbers = [2, 4, 6];
// const allEven = numbers.every(num => num % 2 === 0); // Outputs: true
// 6. reduce()
// Definition: The reduce() method executes a reducer function on each element of the array, resulting in a single output value.
// Example:
// javascript
// Copy code
// const numbers = [1, 2, 3];
// const sum = numbers.reduce((acc, num) => acc + num, 0); // Outputs: 6
// 7. find()
// Definition: The find() method returns the value of the first element in the array that satisfies a specified test (function). Returns undefined if no element is found.
// Example:
// javascript
// Copy code
// const numbers = [1, 2, 3, 4];
// const firstEven = numbers.find(num => num % 2 === 0); // Outputs: 2
// 8. findIndex()
// Definition: The findIndex() method returns the index of the first element in the array that satisfies a specified test (function). Returns -1 if no element is found.
// Example:
// javascript
// Copy code
// const numbers = [1, 2, 3, 4];
// const indexOfFirstEven = numbers.findIndex(num => num % 2 === 0); // Outputs: 1
// 9. fill()
// Definition: The fill() method fills all the elements of an array with a static value, from a start index to an end index.
// Example:
// javascript
// Copy code
// const array = [1, 2, 3];
// array.fill(0); // Outputs: [0, 0, 0]
// 10. sort()
// Definition: The sort() method sorts the elements of an array in place and returns the sorted array. By default, it sorts elements as strings.
// Example:
// javascript
// Copy code
// const numbers = [3, 1, 2];
// numbers.sort(); // Outputs: [1, 2, 3]
// 11. flat()
// Definition: The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// Example:
// javascript
// Copy code
// const array = [1, [2, [3, 4]]];
// const flatArray = array.flat(); // Outputs: [1, 2, [3, 4]]
// 12. toLocaleString()
// Definition: The toLocaleString() method returns a string representing the elements of the array. It can be formatted according to the locale settings.
// Example:
// javascript
// Copy code
// const numbers = [1, 2, 3];
// console.log(numbers.toLocaleString()); // Outputs: "1,2,3" (format may vary by locale)
// Summary
// These array methods are powerful tools in JavaScript for manipulating and working with arrays, allowing for concise and expressive code.