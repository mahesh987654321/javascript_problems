/* ৪. একটা ফাংশন লিখো। যেটা ইনপুট প্যারামিটার হিসেবে একটা আয়তক্ষেত্রের দৈর্ঘ্য আর উচ্চতাকে নিবে। তারপর সেই আয়তক্ষেত্র এর area (আয়তন) কে রেজাল্ট হিসেবে রিটার্ন করবে।  */

// var rectangleLength = parseInt(89);
// var rectangleWidth = parseInt(56);
// var areaOfRectangle = rectangleLength * rectangleWidth;
// console.log("Area of rectangle is: " + areaOfRectangle);
// var circumferenceOfRectangle = 2 * rectangleLength + 2 * rectangleWidth;
// console.log("Circumference of rectangle is: " + circumferenceOfRectangle);

function rectangle(height, width) {
  let arearect = height * width;
  console.log("Area of rectangle is: " + arearect);
  let ava = 2 * height + 2 * width;
  console.log("Circumference of rectangle is: " + ava);
}
rectangle(89, 56);
