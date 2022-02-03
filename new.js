function array(input) {
  let nam = [];
  for (const element of input) {
    if (element > 0) {
      nam = element;
    } else {
      return nam;
    }
  }
}
let allNumbers = [1, 23, 43, 34, 54, 65, -6, 76, 4, 3, 2, 1, 32, 5];

const positiveResult = array(allNumbers);
console.log(positiveResult);
