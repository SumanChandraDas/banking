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

})