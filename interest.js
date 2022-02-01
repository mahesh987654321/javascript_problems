// ১. তোমাকে ফাংশনের ইনপুট হিসেবে সেলসিয়াস দিবে। তুমি ক্যালকুলেশন করে তাপমাত্রা ফারেনহাইট এ কনভার্ট করে সেটার আউটপুট রিটার্ন করবে

// Multiply the °C temperature by 1.8. Add 32 to this number. This is the answer in °F.

// °F = (°C × 9/5) + 32

// It's just as easy to convert Fahrenheit to Celcius;

// °C = (°F − 32) x 5/9

/*celcius to fahranheit

// function cel(fer){
//     var nam= (fer*9/5)+32
//     return nam
// }
// console.log(cel(56));

*/
// ২. একইভাবে উল্টা হিসাব করবে। যাতে তোমাকে ফারেনহাইট হিসেবে তাপমাত্রা দিলে সেটাকে সেলসিয়াস এ কনভার্ট করে আউটপুট দিবে।
//
/*Fahrenheit to Celcius

function far(cel){
    var nam=(cel-32)*5/9
    return nam
}
console.log(far(132));

*/

// ৩. কেউ ১০০ এর মধ্যে কত মার্ক্স্ পেয়েছে সেটা তোমাকে বলে দিবে। তুমি একটা ফাংশন দিয়ে বলে দিবে সে এ+ পাবে নাকি অন্য কোন গ্রেড পাবে।

// grade system

// let number = 45;
// function grade(number) {
//   if (number >= 80 && number <= 100) {
//     console.log(number + " Is your marks and you got A+");
//   } else if (number >= 70 && number <= 79) {
//     console.log(number + " Is your marks and you got A");
//   } else if (number >= 60 && number <= 69) {
//     console.log(number + " Is your marks and you got A-");
//   } else if (number >= 50 && number <= 59) {
//     console.log(number + " Is your marks and you got B");
//   } else if (number >= 40 && number <= 49) {
//     console.log(number + " Is your marks and you got C");
//   } else if (number >= 33 && number <= 39) {
//     console.log(number + " Is your marks and you got D");
//   } else if (number > 100) {
//     console.log("Sorry! you entired wrong");
//   } else {
//     console.log("Sorry!!!! you fail in the exam");
//   }
// }
// grade(39);

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

// odd even

// function odd_even(number) {
//   if (number % 2 == 0) {
//     return number + " Is a odd number";
//   } else {
//     return number + " Is a even number ";
//   }
// }
// console.log(odd_even(623));

// leap_year

// function leapyear(year){
//     if(year%4==0 && year%100!=0 || year%400==0){
//         return year + " is a leap year*******************"
//     }else{
//         return year + " is not a leapyear----------------"
//     }
// }
// console.log(leapyear(2028));

// swap

// var a=1;let b=2;let c=3;let d=4;let e=5;let f=6;let g=7
// console.log('before enter-- a: ',a,' b: ',b,' c: ',c,' d: ',d,' e: ',e,' f: ',f,' g: ',g, );
// [a,b,c,d,e,f,g] = [g,f,e,d,c,b,a]
// console.log('after enter-- a: ',a,' b: ',b,' c: ',c,' d: ',d,' e: ',e,' f: ',f,' g: ',g, );

// let a=1
// let b=2
// [a,b]=[b,a]

// function odd(fnum, lnum) {
//   if (fnum < lnum) {
//     for (i = fnum; i <= lnum; i++) {
//       if (i % 2 == 0) {
//         console.log(i, "Is a odd number");
//       }
//       else{
//           console.log(i, 'is a even number ');
//       }
//     }
//   }
// }
// odd(78,100)

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

function vowelsAndConsonants(s) {
  const vowels = "aeiou";

  var consonants = "";

  for (var i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      console.log(s[i]);
    } else {
      consonants += s[i] + "\n";
    }
  }

  console.log(consonants.trim());
}

function main() {
  const s = readLine();

  vowelsAndConsonants(s);
}
vowelsAndConsonants()