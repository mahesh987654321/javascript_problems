// problem 1:

// function anaToVori(ana) {
//   if (typeof ana != "number") {
//     return "Enter a valid number ";
//   }
//   const result = ana / 16;
//   return result;
// }
// console.log(anaToVori(985));

// problem 2:

// function pandaCost(singara, sumoca, gylapipi) {
//   if (
//     typeof singara != "number" ||
//     typeof sumoca != "number" ||
//     typeof gylapipi != "number"
//   ) {
//     return "enter a valid";
//   }

//   const singaraPrice = singara * 7;
//   const sumocaPrice = sumoca * 10;
//   const gylapipiPrice = gylapipi * 15;
//   const total = singaraPrice + sumocaPrice + gylapipiPrice;
//   return total;
// }
// console.log(pandaCost(1, 2, 0));

// problem 3:

function picnicBudget(totaltk) {
  if (typeof totaltk != "number") {
    return "Enter a valid number";
  }
  if (totaltk <= 100) {
    return 5000 * totaltk;
  } else if (totaltk > 100 && totaltk <= 200) {
    return 4000 * totaltk;
  } else totaltk > 200;
  {
    return 3000 * totaltk;
  }
}
console.log(picnicBudget(101));

// problem 4:

// function oddFriend(friendsName) {
//   let longestfrnd = "";

//   for (const element of friendsName) {
//     if (element.length % 2 != 0) {
//       longestfrnd = element;
//       return longestfrnd;
//     }
//   }
//   for (const element of friendsName) {
//     if (element.length % 2 == 0) {
//       return "error..................";
//     }
//   }
// }
// let array = ["ab", "abc", "abcd", "ahisck", "nacyson"];
// let func = oddFriend(array);
// console.log(func);
