/* কোন একটা array এর মধ্যে অনেকগুলা সংখ্যা আছে। সেই সংখ্যাগুলো থেকে second largest সংখ্যা বের করার একটা প্রোগ্রাম লিখো। দরকার হলে গুগলে সার্চ দাও। তারপর সার্চ রেজাল্ট দেখে বুঝে বুঝে করার চেষ্টা করো।*/

var stringArray = new Array("20", "120", "111", "215", "54", "78");

// // let's convert it to a real array of numbers, not of strings :
// var intArray = stringArray.map(Number);

// // now let's sort it and take the second element :
// var second = intArray.sort(function (a, b) {
//   return b - a;
// })[1];
// console.log(second);

// const nam = stringArray.map(Number);
// const second = nam.sort(function (a, b) {
//   return b-a;
// })[1];
// console.log(second);
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

arr.sort(function (a, b) {
  return b - a;
});

console.log(arr[1]);
