// if (false) {
//     var outcome = "if block";
// } else if (true) {
//     var outcome = "else if block";
// } else {
//     var outcome = "else block";
// }

// console.log(output);

// vari = true;
// if (typeof vari == "boolean") {
//   console.log("Very is Defined ");
// } else {
//   console.log("vary is not defined");
// }
// console.log(typeof(vari));

// while loop

// i = 1;
// while (i <= 100000) {
//   console.log(i);
//   i++;
// }

// var sum = 0;
// var n = 76;
// for (var i = 1; i <= n; i++) {
//   sum += i;
// }
// console.log("Sum :", sum);

// var sum = 0;
// var n = 100;
// for (var i = 11; i <= n; i++) {
//   sum += i;
// }
// console.log("sum : ", sum);
// //  while (condition) {

// //  }

// var arr = [13, 23, 12, 45, 22, 48, 66, 100, 13, 23, 12, 45, 22, 48, 66, 100,102];
// for (var i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 == 0) {
//     console.log(arr[i]); //print even number
//   }
// }

// const vacationSpots = ["Bali", "Paris", "Tulum"];

// // Write your code below

// for (i = 0; i < vacationSpots.length; i++) {
//   console.log("I would love to visit ", vacationSpots[i]);
// }

// const myArray = [6, 19, 20,45,1,2,3,4,5,6,7,8,9];
// const yourArray = [19, 81, 2,45,1,2,3,4,5,6,7,8,9];
// for (let i = 0; i < myArray.length; i++) {
//   for (let j = 0; j < yourArray.length; j++) {
//     if (myArray[i] === yourArray[j]) {
//       console.log('Both loops have the number: ' + yourArray[j])
//     }
//   }
// };

// const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const yourArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let i = 0; i < myArray.length; i++) {
//   for (let k = 0; k < yourArray.length; k++) {
//     if (myArray[i] === yourArray[k]) {
//       console.log("Both of the number has : " + yourArray[k]);
//     }
//   }
// }

// const myArray = [1, 2, 3, 4, 5, 6, 7, 8];
// const yourArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let i = 0; i < myArray.length; i++) {
//   for (k = 0; k < yourArray.length; k++) {
//     if (myArray[i] == yourArray[k]) {
//       console.log("The same number is : ", yourArray[k]);
//     }
//   }
// }

// let bobsFollowers = ["mahesh", "ratul", "ashik", "tufan"];
// let tinasFollowers = ["mahesh", "ratul", "dipto"];
// let mutualFollowers = [""];

// for (let i = 0; i < bobsFollowers.length; i++) {
//   for (let j = 0; j < tinasFollowers.length; j++) {
//     if (bobsFollowers[i] == tinasFollowers[j]) {
//       console.log("Both loops have the number: " + mutualFollowers[j]);
//     }
//   }
// }

// let bobsFollowers = ["Joe", "Marta", "Sam", "Erin"];
// let tinasFollowers = ["Sam", "Marta", "Elle"];
// let mutualFollowers = [];

// for (let i = 0; i < bobsFollowers.length; i++) {
//   for (let j = 0; j < tinasFollowers.length; j++) {
//     if (bobsFollowers[i] === tinasFollowers[j]) {
//       mutualFollowers.push(tinasFollowers[j]);
//       console.log("Both name is : " + mutualFollowers);
//     }
//   }
// }


const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below
let currentCard;

while ( currentCard != 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
	console.log(currentCard);
}

