// deposit line
document.getElementById("input-deposit").addEventListener("click", function () {
  const depositField = document.getElementById("deposit");
  const inputFieldText = depositField.value;
  const newInputField = parseFloat(inputFieldText);
  const depositAmount = document.getElementById("change");
  const previousAmmountText = depositAmount.innerText;
  const prevDipoAmo = parseFloat(previousAmmountText);
  const newDepositTotal = prevDipoAmo + newInputField;
  depositAmount.innerText = newDepositTotal;
  depositField.value = "";

  //   update account balance

  const balanceTotal = document.getElementById("withd");
  const balanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(balanceTotalText);
  const newBalanceTotal = previousBalanceTotal + newDepositTotal;
  balanceTotal.innerText = newBalanceTotal;
  depositField.value = "";

  //   withdraw

  document
    .getElementById("input-withdraw")
    .addEventListener("click", function () {
      const withdrawInput = document.getElementById("withdraw");
      const withdrawAmountText = withdrawInput.value;
      const newWithdrawAmount = parseFloat(withdrawAmountText);
      const withdrawTotal = document.getElementById("nam");
      const previousWithdrawText = withdrawTotal.innerText;
      const previousWithdrawTotal = parseFloat(previousWithdrawText);
      const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
      withdrawTotal.innerText = newWithdrawTotal;

      //   update

      const balanceTotal = document.getElementById("withd");
      const previousBalanceText = balanceTotal.innerText;
      const previousBalanceTotal = parseFloat(previousBalanceText);
      const newBalanceTotal = previousBalanceTotal - newWithdrawTotal;
      balanceTotal.innerText = newBalanceTotal;
      withdrawInput.value = "";
    });
});
