document.getElementById("clss").addEventListener("click", function (event) {
  event.stopPropagation();
  console.log("second clicked");
});

document.getElementById("kl").addEventListener("click", function (event) {
  event.stopPropagation();
  console.log("ul clicked");
});
