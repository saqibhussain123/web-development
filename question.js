var num =5;

var res =++num + num++ + num + ++num -  --num
//         6       6     7       8          7

// ++num:

// This is the pre-increment operator. It increments num by 1 first, so num becomes 6.
// Result: 6
// num++:

// This is the post-increment operator. It returns the current value of num (which is now 6) and then increments num by 1.
// Result: 6 (but now num becomes 7 after this operation).
// num:

// Now, num is 7.
// Result: 7
// ++num:

// This is again the pre-increment operator. It increments num by 1, so num becomes 8.
// Result: 8
// --num:

// This is the pre-decrement operator. It decrements num by 1, so num becomes 7.
// Result: 7
// Putting It All Together
// Now we substitute the results back into the expression:

// The expression becomes:
// 6 + 6 + 7 + 8 - 7
// Calculate the Result
// Now perform the arithmetic:

// Step 1: 6 + 6 = 12
// Step 2: 12 + 7 = 19
// Step 3: 19 + 8 = 27
// Step 4: 27 - 7 = 20
// Final Result
// So, the value of res is 20.

// Summary
// Expression: ++num + num++ + num + ++num - --num
// Final Value of res: 20

















var userinput=prompt("enter a name");
var arr=["karachi",'london','peshawer','islamabad','quatia'];

for(var i=0;i<arr.length;i++){
    if(userinput ==arr[i]){
        alert('city found');
        break;
    }else{
        alert('city not found');
    }
}


// var nam='reD';
// document.write(nam.charAt(1));

var num1=6;
var num2=3;
var num3=10;
var res2=--num1 - --num2 + num3++ + num3-- + num1
//        5          2        10      11      5

var a =4 ;
var b = 2;
var c=10;
var eq= a++ + ++a - --b + c++ + c++ + ++a + a;
//       4      6    1     10    11    7    7