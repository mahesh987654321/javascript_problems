// ১. একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table) আউটপুট হিসেবে দেখাবে।

// function mult(number) {
//   for (let i = 1; i <= 10; i++) {
//     console.log(number + "*" + i + "=" + number * i);
//   }
// }
// mult(133)

// একটা ফাংশন লিখবা যেটা যেকোন নামকে uppercase বা রেগুলার কেইস হিসেবে নিবে আর আউটপুট হিসেবে সেই নাম lowercase করে রিটার্ন করবে।

// var nam = "HI MY NAME IS MAHESH BISWAS I AM A BOY I LIVE IN BANGLADESH";
// function func() {
//   return nam.toLowerCase();
// }
// console.log(func());

// fullName নামে একটা ফাংশন তৈরী কর যেটা তোমার নামের প্রথম অংশ এবং তোমার নামের শেষের অংশ প্যারামিটার হিসেবে নিবে। আর তোমার নামের দুই অংশ জোড়া দিয়ে আউটপুট হিসেবে তোমার পূর্ন নাম রিটার্ন করে দিবে। যেমন ধরো, hablu এবং kanto ইনপুট প্যারামিটার হিসেবে দিলে আউটপুট হিসেবে hablu kanto রিটার্ন করবে।

// function fullName(firstName, lastName) {
//   return firstName + " " + lastName;
// }
// console.log(fullName("Mahesh", "Biswas"));

// একটা ফাংশন লিখবা যেটাকে তুমি কোন সংখ্যাকে ইনপুট হিসেবে দিলে সে সেই সংখ্যার square করে সেই square কে রিটার্ন করবে\

// function squre(number) {
//   return number ** 2;
// }
// console.log(squre(5));

// Why pay a fortune teller when you can just program your fortune yourself?

//     Write a function named tellFortune that:
//         takes 4 arguments: number of children, partner's name, geographic location, job title.
//         outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
//     Call that function 3 times with 3 different values for the arguments.

// function tellFortune(jobTitle, geoLocation, partner, numKids) {
//   var future =
//     "You will be a " +
//     jobTitle +
//     " in " +
//     geoLocation +
//     " and married to " +
//     partner +
//     " " +
//     " with " +
//     numKids +
//     " kids.";
//   //   console.log(future);
//   return future;
// }

// console.log(tellFortune("bball player", "spain", "Shaq", 3));
// tellFortune("stunt double", "Japan", "Ryan Gosling", 3000);
// tellFortune("Elvis impersonator", "Russia", "The Oatmeal", 0);

// Write a function named calculateDogAge that:
// takes 1 argument: your puppy's age.
// calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
// outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
// Call the function three times with different sets of values.
// Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years.

// function calculateDogAge(age) {
//   var dogYears = 7 * age;
//   console.log("Your doggie is " + dogYears + " years old in dog years!");
// }

// calculateDogAge(1);
// calculateDogAge(0.5);
// calculateDogAge(12);



// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X" 
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number. 


// function calculateSupply(age, numPerDay) {
//     var maxAge = 100;
//     var totalNeeded = (numPerDay * 365) * (maxAge - age);
//     var message = 'You will need ' + totalNeeded + ' cups of tea to last you until the ripe old age of ' + maxAge;
//     console.log(message);
//   }
  
//   calculateSupply(28, 36);
//   calculateSupply(28, 2.5);
//   calculateSupply(28, 400);


