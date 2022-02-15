function getInputValue(inputId) {
    debugger;
    const Input = document.getElementById(inputId);
    const InputValue = parseFloat(Input.value);

    Input.value = '';

    return InputValue;
};

function updateTotalField(fieldId, InputValue) {
    // find diposit amount value 


    const Amount = document.getElementById(fieldId);
    const AmountValue = parseFloat(Amount.innerText);

    // add into diposit 
    let total = AmountValue + InputValue;
    Amount.innerText = total;

}

function getCurrentBalance() {
    const balance = document.getElementById('balance-total');
    const balanceValue = parseFloat(balance.innerText);
    return balanceValue;
}

function updateBalance(InputValue, isadd) {
    const balance = document.getElementById('balance-total');
    const balanceValue = getCurrentBalance()
    if (isadd == true) {
        let totalBalance = balanceValue + InputValue;
        balance.innerText = totalBalance;
    }
    else {
        let totalBalance = balanceValue - InputValue;
        balance.innerText = totalBalance;
    }
}

document.getElementById("diposit-button").addEventListener("click", function () {
    // find diposite input from user 
    /*
    const dipositInput = document.getElementById("diposit-input");
    const dipositInputValue = parseFloat(dipositInput.value);*/

    // call function 

    // // find diposit amount value 
    /*
    const dipositAmount = document.getElementById("diposit-total");
    const dipositAmountValue = parseFloat(dipositAmount.innerText);
    */

    // // add into diposit 
    /*
    let totalDiposet = dipositAmountValue + dipositInputValue;
    dipositAmount.innerText = totalDiposet;*/


    // add into balance 
    /*
     const balance = document.getElementById('balance-total');
     const balanceValue = parseFloat(balance.innerText);
 
     let totalBalance = balanceValue + dipositInputValue;
     balance.innerText = totalBalance;
     */
    const dipositInputValue = getInputValue('diposit-input');

    if (dipositInputValue > 0) {
        updateTotalField("diposit-total", dipositInputValue);
        updateBalance(dipositInputValue, true);

    }



});

// handle withdraw button 
document.getElementById("withdraw-button").addEventListener("click", function () {
    /*
      geting withdraw amount from user
      const withdrawInput = document.getElementById('withdraw-input');
      const withdrawInputValue = parseFloat(withdrawInput.value); */

    // // get withdraw field for put value 
    /*
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalValue = parseFloat(withdrawTotal.innerText);

    let totalWithdraw = withdrawTotalValue + withdrawInputValue;
    withdrawTotal.innerText = totalWithdraw;*/


    /*
        calculate balance after withdraw 
        const totalBalance = document.getElementById('balance-total');
        const totalBalanceValue = parseFloat(totalBalance.innerText);*/


    // // calculate balance 
    /*let newBalance = totalBalanceValue - withdrawInputValue;
    totalBalance.innerText = newBalance;*/
    const withdrawInputValue = getInputValue('withdraw-input');
    const CurrentBalance = getCurrentBalance();
    if (withdrawInputValue > 0 && withdrawInputValue <= CurrentBalance) {
        debugger;
        updateTotalField("withdraw-total", withdrawInputValue);
        updateBalance(withdrawInputValue, false);
    }


})