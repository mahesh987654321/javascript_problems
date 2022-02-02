// inch to cem

// function inch(num){
//     return num/12
// }
// console.log(inch(80));

// তোমার বয়স কি odd নাকি even সংখ্যা সেটা চেক কর একটা ফাংশন দিয়ে। সেই ফাংশনকে কোন সংখ্যা প্যারামিটার হিসেবে দিলে, সেই সংখ্যা Even হলে ফাংশন true রিটার্ন করবে আর Odd হলে false রিটার্ন করবে।

// function add(num){
//     if(num%2==0){
//         console.log('This is a odd Number :', num)
//     }else{
//         console.log('This is a even Number : ', num);
//     }
// }
// add(45)
// add(42)
// add(41)
// add(89)

//  leapYear() নামে ফাংশন লিখো এবং নেক্সট ইয়ার অর্থাৎ ২০২৩ কি leap year নাকি সেটা চেক করো। Leap year হলে ফাংশন true রিটার্ন করবে আর leap year না হলে false রিটার্ন করবে।

// function leapyear(year) {
//   if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(leapyear(2021));



// factorial using for looop
function check(l){
    if(l!=6){
        return true
    }else{
        return false
    }
}
check(6*5*4*3*2*1)