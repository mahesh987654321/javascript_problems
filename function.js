// function singaradam(taka, koida, karjonne, kirong) {
//   console.log("Singara ar dam Hocca  :", taka);
//   console.log("Singara ar koida   :", koida);
//   console.log("Singara ar karjonne  :", kirong);
//   console.log("Singara ar kirong ar ta  :", karjonne);
//   var singaraKoida = 12;
//   var quantity = taka / singaraKoida;
//   return quantity;
// }
// var money = 9000;
// // singaradam(90, 12, "lal", "ma r baba");
// var pic = 12;
// var la = "ma rr baba";
// var op = "lala";
// var nma = singaradam(money, la, op, nma);
// console.log("ai nan singara :", nma);

// function addtwo(num1, num2) {
//   // return num1* num2
//   var nm = num1;
//   var mn = num2;
// //   var kl = nm * mn;
//   return kl;
// }
// var nam = addtwo(4, 5);
// console.log(nam);
// functon add(num1, num2){ }
// function getReminder(number1, number2) {
//     number1 % number2;
//   }

//   const reminder = getReminder(12, 2);

//   console.log(reminder);

// function addNumber(number1, number2) {
//     return "Result is " + number1 + number2;
//    }

//    var result = addNumber(5, 4);
//    console.log(result);

// const pizza = {
//   toppings: ["cheese", "sauce", "pepperoni"],

//   crust: "deep dish",

//   serves: 2,
// };
// var nam=pizza.toppings[2]
// console.log(nam);

// ১. একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table) আউটপুট হিসেবে দেখাবে।

// const number = 13;

// for (let i = 1; i <= 10; i++) {
//   console.log(number + "*" + i + "=" + number * i);
// }

// function mult(number) {
//   for (let i = 1; i <= 10; i++) {
//     console.log(number + "*" + i + "=" + number * i);
//   }
// }
// mult(133)

// function multi(num){
//     for(var i=1; i<=10; i++){
//         console.log(num +'*' + i + '='+ num*i);
//     }
// }
// multi(13)

function titleize(str) {
    let upper = true
    let newStr = ""
    for (let i = 0, l = str.length; i < l; i++) {
        // Note that you can also check for all kinds of spaces  with
        // str[i].match(/\s/)
        if (str[i] == " ") {
            upper = true
            newStr += str[i]
            continue
        }
        newStr += upper ? str[i].toUpperCase() : str[i].toLowerCase()
        upper = false
    }
    return newStr
}
titleize('Hi my name is mahesg');
