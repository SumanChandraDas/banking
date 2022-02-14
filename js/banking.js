document.getElementById("diposit-button").addEventListener("click", function () {
    // find diposite input from user 
    const dipositInput = document.getElementById("diposit-input");
    const dipositInputValue = parseFloat(dipositInput.value);

    // find diposit amount value 
    const dipositAmount = document.getElementById("diposit-total");
    const dipositAmountValue = parseFloat(dipositAmount.innerText);

    // add into diposit 
    let totalDiposet = dipositAmountValue + dipositInputValue;
    dipositAmount.innerText = totalDiposet;

    // add into balance 
    const balance = document.getElementById('balance-total');
    const balanceValue = parseFloat(balance.innerText);

    let totalBalance = balanceValue + dipositInputValue;
    balance.innerText = totalBalance;

    dipositInput.value = '';

});

// handle withdraw button 
document.getElementById("withdraw-button").addEventListener("click", function () {
    // geting withdraw amount from user
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputValue = parseFloat(withdrawInput.value);

    // get withdraw field for put value 
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalValue = parseFloat(withdrawTotal.innerText);

    let totalWithdraw = withdrawTotalValue + withdrawInputValue;
    withdrawTotal.innerText = totalWithdraw;
    // calculate balance after withdraw 
    const totalBalance = document.getElementById('balance-total');
    const totalBalanceValue = parseFloat(totalBalance.innerText);


    // calculate balance 
    let newBalance = totalBalanceValue - withdrawInputValue;
    totalBalance.innerText = newBalance;

    // cleare value from input filed after button clicked 
    withdrawInput.value = '';




})