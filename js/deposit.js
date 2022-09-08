// console.log("deposit file");
// step 1
document.getElementById("btn-deposit").addEventListener("click", function () {
  //  step-2
  const inputDepositField = document.getElementById("input-deposit");
  const inputDepositFieldString = inputDepositField.value;
  const currentInputDepositField = parseFloat(inputDepositFieldString);
  inputDepositField.value = "";
  //   if (isNaN(inputDepositField)) {
  //     alert("please valid input");
  //     return;
  //   }
  //step-3
  const depositElement = document.getElementById("deposit-total");
  const previousDepositString = depositElement.innerText;
  const previousurrentDeposit = parseFloat(previousDepositString);
  //   step-4
  const newDepositTotal = currentInputDepositField + previousurrentDeposit;
  depositElement.innerText = newDepositTotal;
  //step-5

  const balanceElement = document.getElementById("balance-total");
  const previousBalanceString = balanceElement.innerText;
  const previousCurrentBalance = parseFloat(previousBalanceString);

  //step 7
  const newBalanceTotal = previousCurrentBalance + currentInputDepositField;
  balanceElement.innerText = newBalanceTotal;
});
