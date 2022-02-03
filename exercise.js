// [1]. variable wwrite using string ,boolean,number
// ***************************************************
// var str='Hi my name is mahesh'
// var bool=true;
// var num=2324;

// [2]. let and const
// ************************************************
// let nam = "mahesh";
// nam = "ratul";
// console.log(nam);

// [2.2] const  ar man change kora jai na
// **************************************
// const nam='HU'

//[3] +,-,*,/
// ******************************
// var num1 = 2;
// var num2 = 4;

// var total = num1 + num2;
// var total1 = num1 - num2;
// var total2 = num1 * num2;
// var total3 = num1 / num2;
// var total4 = num1 % num2;
// console.log(total);
// console.log(total1);
// console.log(total2);
// console.log(total3);
// console.log(total4);

//  [4]<,>,==,!=,<=,>= babohar korta hoba
// ********************************************
// let nam1 = 5;
// let nam2 = 6;
// total = nam1 < nam2;
// total1 = nam1 > nam2;
// total2 = nam1 == nam2;
// total3 = nam1 != nam2;
// total4 = nam1 >= nam2;
// total5 = nam1 <= nam2;
// console.log(total);
// console.log(total1);
// console.log(total2);
// console.log(total3);
// console.log(total4);
// console.log(total5);

// [5] duto sorto ar vitor 2 ta sorto e puron korta hoba
// *****************************************************
// let nam1 = 5;
// let nam2 = 6;

// if (nam1 && nam2 == true) {
//   console.log("yess");
// } else {
//   console.log("Ohh no");
// }

// [5.2] duto sorto ar vitor 1 ta sorto e puron korta hoba
// *****************************************************
// let nam1 = 5;
// let nam2 = 6;

// if (nam1 && nam2 == true) {
//   console.log("yess");
// } else {
//   console.log("Ohh no");
// }

// [6] akta sorto puron korla kicu korba abar sai sorto puron na korla onno kicu korba
// ************************************************************
// let ui = 90;
// let iu = 100;
// if (ui > iu) {
//   console.log("Yes it is true ");
// } else {
//   console.log("Ohhh no my god it is not true");
// }

// [7] while loop da 7-19 ar vitor joto bijor sonkha aca sai koita dakata hoba
// *********************************************
// let i = 6;
// while (i <= 19) {
//   i++;
//   if (i % 2 != 0) {
//     console.log("Ai gola hocca bijor sankha", i);
//   }
// }

// [8]akta array diclear korta hoba > ar vitor koita updan aca ta bar korta hoba > sai array ar 4th number position change korta hoba > array ar vitor 2 ta updan jog korta hoba  > abong akta updan ka bar kora dita hoba

// let array = [1, 2, 3, 45, 6, 6, 78, 9, 9, 0];
// ***********************************
// total = array.length;
// console.log(total);
//  array.push(5,6);
// array.pop()
// console.log(array);

// [9]akta array ar sob gola updan daktaa hoba loop ar sahajjo ta
// ****************************************

// let array=[1,2,3,4,5,665,6,7]
// for(i=0; i<=array.length; i++){
//     const element = array[i]
//     console.log(element);
// }

// [10] 80 ar chaya boro sonkha dakata hoba
// *************************************************
// let array = [
//   1, 235, 2345, 23, 562, 355, 2343, 44, 25, 324, 235, 2, 54, 346, 53,
// ];
// for (let i = 0; i <= array.length; i++) {
//   const element = array[i];
//   if (element > 80) {
//     console.log("These number is greatter than 80 ", element);
//   } else {
//     console.log("This number is smaller than 80");
//   }
// }

// [11] 3 ta sonkha r gun fol bar kora tadar folafol return korta hoba
// ***********************************************************
// function three(first, second, third) {
//   const gun = first * second * third;
//   return gun;
// }
// const nam = three(5, 9, 6);
// console.log(nam);

// [12] akta object ar vitor a 3 ta property thakba abong tadar vitor thaka ja kono akta property change korta hoba

// let obj = { nam: "mahesh", nam2: "ashik", nam3: "tufan" };

// obj.nam2 = "ratul";
// console.log(obj);

// *************************************************************************************************************************

// [1]সিম্পল একটা ফাংশন লিখতে হবে। যেটার নাম হবে feetToInch এবং এই ফাংশন ইনপুট হিসেবে নিবে feet আর রিটার্ন করবে inch । অর্থাৎ এই ফাংশনকে কোন একটা ফিট বলে দিলে সে রিটার্ন হিসেবে বলে দিবে কত ইঞ্চি হয়।
// ********************************************
// function fitToInch(feet) {
//   return feet * 12;
// }
// console.log(fitToInch(65));

// [২]. একদম ফাংশন এর নাম হুবহু centimeterToMeter নাম দিয়ে একটা ফাংশন লিখবে। এই ফাংশনে ইনপুট হিসাবে কেউ সেন্টিমিটার দিবে আর সেই সেন্টিমিটার কে মিটার এ কনভার্ট করে রেজাল্ট রিটার্ন করবে।

// function centimeterToMeter(centimeter) {
//   return centimeter * 0.01;
// }
// console.log(centimeterToMeter(1000));

// [৩]. আরেকটা ফাংশন লিখবে যেটার নাম লিখবে। যেই ফাংশনের নাম হবে paperRequirements এই ফাংশনের প্যারামিটার হিসেবে তিনটা প্যারামিটার হবে। প্রথম প্যারামিটার হবে তুমি প্রথম বই কত কপি ছাপাতে চাও। সেকেন্ড প্যারামিটার হবে তুমি সেকেন্ড বই কত কপি ছাপাতে চাও। আর থার্ড প্যারামিটার হবে তুমি থার্ড বই কত কপি ছাপাতে চাও। অর্থাৎ কোন বই এর কত কপি ছাপানো হবে সেটাই প্যারামিটার হিসেবে নিবে।
// **********************************************************************
// এইবার ভালো করে খেয়াল করো।
// প্রথম বই ছাপানোর জন্য পৃষ্ঠা লাগবে ১০০ টা
// সেকেন্ড বই ছাপানোর জন্য পৃষ্ঠা লাগবে ২০০ টা
// তৃতীয় বই ছাপানোর জন্য পৃষ্ঠা লাগবে ৩০০ টা

// function paperRequirements(firstBook, secondBook, thirdBook) {
//   const first = firstBook * 100;
//   const second = secondBook * 200;
//   const third = thirdBook * 300;
//   total = first + second + third;
//   return total;
// }
// console.log(paperRequirements(3, 6, 8));

// ৪. একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে।
// ****************************************************************************
// function bestFriend(arra) {
//   var max_str = arra[0].length;
//   var ans = arra[0];
//   for (var i = 1; i < arra.length; i++) {
//     var maxi = arra[i].length;
//     if (maxi > max_str) {
//       ans = arra[i];
//       max_str = maxi;
//     }
//   }
//   return ans;
// }
// console.log(bestFriend(["mahesh", "ratul", "ashik", "tata"]));

// var allFriends = ["mahesh", "ratul", "tufan", "ashik"];
// function bestFriend(friendsName) {
//   var total = [];
//   for (const name of friendsName) {
//     var friendBox = name;
//     if (total.length < friendBox.length) {
//       total = name;
//     }
//   }
//   return total;
// }
// var bigFriend = bestFriend(allFriends);
// console.log(bigFriend);

// [৫]. এইটা একটু ট্রিকি হতে পারে। একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা। এবং সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। অর্থাৎ শূন্য বা শূন্যের চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা array এর মধ্যে রাখবে। আর যদি নেগেটিভ সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে। এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে।

// **************************************************************************

// function array(allNumbers) {
//   let nam = [];
//   for (let i = 0; i < allNumbers.length; i++) {
//     const element = allNumbers[i];
//     if (element > 0) {
//       nam[i] = element;
//     } else {
//       return nam;
//     }
//   }
// }
// let allNumbers = [1, 23, 43, 34, 54, 65, -6, 76, 4, 3, 2, 1, 32, 5];
// let newd = array(allNumbers);
// console.log(newd);
