// const fibo = [0, 1];
// for (let i = 2; i <= 10; i++) {
//   fibo[i] = fibo[i - 1] + fibo[i - 2];
// }
// console.log(fibo);

// function add(number) {
//   if (typeof number != "number") {
//     return "Please Enter a valid number";
//   }
//   const fibo = [0, 1];
//   for (let i = 2; i <= number; i++) {
//     fibo[i] = fibo[i - 1] + fibo[i - 2];
//     fibo[i] = fibo[i - 1] + fibo[i - 2];
//   }
//   return fibo;
// }
// console.log(add("iah"));

var sentence = "I am hardworking. I am determined. I will be a web developer.";
var count = 0;
for(var i = 0; i < sentence.length; i++){
  var letter = sentence[i];
  if(letter=='a'){
    count++;
  }
}
console.log(count)