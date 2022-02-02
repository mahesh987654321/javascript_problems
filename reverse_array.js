const array = "My name is Mahesh Biswas ";
// function reverseString(text) {
//   let reverse = "";
//   for (const letter of text) {
//     //   console.log(letter);
//     reverse = letter + reverse;
//   }
//   return reverse
// }
// let reversed = reverseString(array);
// console.log(reversed);

/* function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
reverseString('hello'); */

function reverse(text) {
  let nam = "";
  for (let element of text) {
    nam = element + nam;
  }
  return nam;
}
console.log(reverse(array));
