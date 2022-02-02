



// ৪. সুদের হিসাব করবে। জাস্ট হিসাব কেমনে করতে হয়। সেই চিন্তায় করবে। সুদ ভালো না খারাপ সেটা এখন চিন্তা করার দরকার নাই। জাস্ট একটা ফর্মুলা থাকলে সেটা কিভাবে কোড এ লিখতে হয় সেই এঙ্গেল থেকে করার চেষ্টা করো।

// interest

// Simple interest = principal X interest rate X time

// The individual that took out a mortgage will have to pay $12,000 in interest at the end of the year, assuming it was only a one-year lending agreement. If the term of the loan was for 30 years, the interest payment will be:

// Simple interest = $300,000 X 4% X 30 = $360,000

// function interest(p, i, t) {
//   let nam = p * (i/100) * t;
//   return nam;
// }
// console.log(interest(100000,6,4));




// swap

// var a=1;let b=2;let c=3;let d=4;let e=5;let f=6;let g=7
// console.log('before enter-- a: ',a,' b: ',b,' c: ',c,' d: ',d,' e: ',e,' f: ',f,' g: ',g, );
// [a,b,c,d,e,f,g] = [g,f,e,d,c,b,a]
// console.log('after enter-- a: ',a,' b: ',b,' c: ',c,' d: ',d,' e: ',e,' f: ',f,' g: ',g, );

// let a=1
// let b=2
// [a,b]=[b,a]



// function greeting(parameterVariable) {
//   // This line prints 'Hello, World!' to the console:
//   console.log("Hello, World!");
//   // console.log('Welcome to 10 Days of JavaScript!')
//   console.log(parameterVariable);

// Write a line of code that prints parameterVariable to stdout using console.log:
// }
// greeting()
// console.log(greeting());

/**
 *   The variables 'firstInteger', 'firstDecimal', and 'firstString' are declared for you -- do not modify them.
 *   Print three lines:
 *   1. The sum of 'firstInteger' and the Number representation of 'secondInteger'.
 *   2. The sum of 'firstDecimal' and the Number representation of 'secondDecimal'.
 *   3. The concatenation of 'firstString' and 'secondString' ('firstString' must be first).
 *
 *	Parameter(s):
 *   secondInteger - The string representation of an integer.
 *   secondDecimal - The string representation of a floating-point number.
 *   secondString - A string consisting of one or more space-separated words.
 **/
// function performOperation(secondInteger, secondDecimal, secondString) {
//   // Declare a variable named 'firstInteger' and initialize with integer value 4.
//   const secondInteger = 4;
//   const secondDecimal = 8;
//   console.log(sum=secondInteger+secondDecimal);

//   // Declare a variable named 'firstDecimal' and initialize with floating-point value 4.0.
//   const secondDecimal = 4.0;
//   const secondInteger = 3.78
//   console.log(sum=secondDecimal+secondInteger);

//   // Declare a variable named 'firstString' and initialize with the string "HackerRank".
//   const secondString = 'HackerRank ';
//   const secondInteger =''

// Write code that uses console.log to print the sum of the 'firstInteger' and 'secondInteger' (converted to a Number        type) on a new line.

// Write code that uses console.log to print the sum of 'firstDecimal' and 'secondDecimal' (converted to a Number            type) on a new line.

// Write code that uses console.log to print the concatenation of 'firstString' and 'secondString' on a new line. The        variable 'firstString' must be printed first.

// }
// performOperation()

// function performOperation(secondInteger, secondDecimal, secondString) {
//   // Declare a variable named 'firstInteger' and initialize with integer value 4.

//   const firstInteger = 4;

//   console.log(firstInteger + parseInt(secondInteger, 10));

//   // Declare a variable named 'firstDecimal' and initialize with floating-point value 4.0.

//   const firstDecimal = 4.0;

//   console.log(firstDecimal + parseFloat(secondDecimal));

//   // Declare a variable named 'firstString' and initialize with the string "HackerRank".

//   const firstString = "HackerRank ";

//   console.log(firstString.concat(secondString));
// }
// performOperation()

// function project(firstInteger, firstDecimal, firstString){
//   const secondInteger =4;
//   console.log (secondInteger + parseInt(firstInteger));
//   const secondDecimal =4.5
//   console.log(secondDecimal + parseFloat(firstDecimal));
//   const secondString = 'HackerRank'
//   console.log(secondString.concat(firstString));
// }
// console.log(project(6,4,'is a good website for practiccing programming'));

