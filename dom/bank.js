// button ar jonne

document.getElementById("input").addEventListener("click", function () {
  const userName = document.getElementById("inp-text");
  const userValue = userName.value;
  const userPass = document.getElementById("inp-pass");
  const userValuePass = userPass.value;
  if (userValue == "maheshbiswas26@gmail.com" && userValuePass == "hi there") {
    window.location.href = "delegate.html";
  } else if (userValue == "maheshbiswas26@gmail.com" && userValuePass == "") {
    alert("enter your password");
  } else {
    alert("enter a valid password");
  }
});
