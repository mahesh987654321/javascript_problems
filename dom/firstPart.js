// document.getElementById("input-deposit").addEventListener("click", function () {
//   const inputField = document.getElementById("deposit");
//   const inputFieldAmount = inputField.value;
//   const depositText = document.getElementById("change");
//   depositText.innerText = inputFieldAmount;
// });

// document.getElementById("input-deposit").addEventListener("click", function () {
//   const inputField = document.getElementById("deposit");
//   const deepositValue = inputField.value;
//   const depositText = document.getElementById("change");
//   depositText.innerText = deepositValue;
//   inputField.value = "";
// });

document.getElementById("input-deposit").addEventListener("click", function () {
  const inputField = document.getElementById("deposit");
  const inputFieldValue = parseFloat(inputField.value);
  const inputFieldText = document.getElementById("change");
  const newAmmount = parseFloat(inputFieldText.innerText);
  const inputTotal = parseFloat(newAmmount + inputFieldValue);
  inputFieldText.innerText = inputTotal;
  inputField.value = "";
});
