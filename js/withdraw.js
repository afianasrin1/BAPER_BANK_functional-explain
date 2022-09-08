document.getElementById("btn-withdraw").addEventListener("click", function () {
  //  step-2
  const inputWithdrawField = document.getElementById("input-withdraw");
  const inputWithdrawFieldString = inputWithdrawField.value;
  const currentInputWithdrawField = parseFloat(inputWithdrawFieldString);
  inputWithdrawField.value = "";
  if (isNaN(currentInputWithdrawField)) {
    alert("please valid input");
    return;
  }
  //step-3
  const withdrawElement = document.getElementById("withdraw-total");
  const previouswithdrawString = withdrawElement.innerText;
  const previousurrentwithdraw = parseFloat(previouswithdrawString);
  //   step-4
  const newwithdrawTotal = previousurrentwithdraw + currentInputWithdrawField;
  withdrawElement.innerText = newwithdrawTotal;
  //   step-6
  const balanceElement = document.getElementById("balance-total");
  const previousBalanceString = balanceElement.innerText;
  const previousCurrentBalance = parseFloat(previousBalanceString);

  if (newwithdrawTotal > previousCurrentBalance) {
    alert("taka nai");
    return;
  }

  //step 7
  const newBalanceTotal = previousCurrentBalance - currentInputWithdrawField;
  balanceElement.innerText = newBalanceTotal;
});
