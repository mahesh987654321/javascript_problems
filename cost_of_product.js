let product = [
  { apple: 2357, quantity: 1 },
  { apple: 256435, quantity: 2 },
  { apple: 23674, quantity: 4 },
  { apple: 673657, quantity: 5 },
  { apple: 347, quantity: 6 },
];
// let sum = 0;
// for (let products of product) {
//   let result = products.apple * products.apple;a
//   // result = result + sum;
//   sum = sum + result;
// }
// console.log(sum);

let sum = 0;
for (let i = 0; i < product.length; i++) {
  const element=product[i]
  let result = product.apple * product.quantity;
  sum += result;
}
console.log(sum);
