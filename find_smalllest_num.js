// function add(number) {
//   let smallest = number[0];
//   for (let i = 0; i < number.length; i++) {
//     const element = number[i];
//     if (element < smallest) {
//       smallest = element;
//     }
//   }
//   return smallest;
// }
// const num = [1, 2, -3, -1, 4, 5, 6, 7, 8, 89, 3,-378];
// const akk = add(num);
// console.log(akk);

function small(number) {
  let smallest = number[0];
  for (let i = 0; i < number.length; i++) {
    const element = number[i];
    if (element < smallest) {
      smallest = element;
    }
  }
  return smallest;
}
const num = [1, 2, -3, -1, 4, 5, 6, 7, 8, 89, 3, -378];
console.log(small(num));
