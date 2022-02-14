document.getElementById("diposit-button").addEventListener("click", function () {
    // find diposite input from user 
    const dipositInput = document.getElementById("diposit-input");
    const dipositInputValue = parseFloat(dipositInput.value);

    // find diposit amount value 
    const dipositAmount = document.getElementById("diposit-total");
    const dipositAmountValue = parseFloat(dipositAmount.innerText);

    let totalDiposet = dipositAmountValue + dipositInputValue;
    dipositAmount.innerText = totalDiposet;

    dipositInput.value = '';




})