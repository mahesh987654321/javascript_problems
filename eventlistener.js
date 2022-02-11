// focus
document.getElementById("inp-delete").addEventListener("focus", function () {
  document.body.style.backgroundColor = "yellow";
});

// blue
document.getElementById("inp-delete").addEventListener("blur", function () {
  document.body.style.backgroundColor = "lightblue";
});

// keydown
// document.getElementById("inp-delete").addEventListener("keydown", function () {
//   const deleteField = document.getElementById("inp-delete");
//   console.log(deleteField.value);
// });
// keydown
document
  .getElementById("inp-delete")
  .addEventListener("keyup", function (event) {
    if (event.target.value == "delete") {
      document.getElementById("btn-button").removeAttribute("disabled");
    } else {
      document.getElementById("btn-button").setAttribute("disabled", true);
    }
  });
