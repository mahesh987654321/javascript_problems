for (let i = 0; i <= 500; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("Number is: ", i);
  } else if (i % 3 == 0) {
    console.log("This is divided by three:++++++++ ", i);
  } else if (i % 5 == 0) {
    console.log("This is divided by Five:--------- ", i);
  } else {
    console.log("This is not dividible: ***********", i);
  }
}

// *
// **
// ***
// ****
// *****
// ******
// *******
// ********
// *********
// **********
// ***********
// ************
