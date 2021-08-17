// function getInputValue() {
//     const depositInput = document.getElementById('deposite-amount');
//     const depositAmountText = depositInput.value;
//     const deipositeAmount = parseFloat(depositAmountText);
//     depositInput.value = '';

//     return deipositeAmount;
//     depositInput.value = '';

// }



document.getElementById('deposit-button').addEventListener('click', function () {
    //    step1 find the input content
    const depositInput = document.getElementById('deposite-amount');
    const depositAmountText = depositInput.value;
    const deipositeAmount = parseFloat(depositAmountText);
    // const deipositeAmount = getInputValue();
    // get current deposite amount

    const currentDepositeAmount = document.getElementById('current-deposite');
    const newDepositeAmountText = currentDepositeAmount.innerText;
    const newDepositeAmount = parseFloat(newDepositeAmountText);


    // get total current deposite

    currentDepositeAmount.innerText = newDepositeAmount + deipositeAmount;

    // update balance

    const balanceTotal = document.getElementById('total-balance');
    const balancetotalText = balanceTotal.innerText;
    const previousTotalBalance = parseFloat(balancetotalText);


    balanceTotal.innerText = previousTotalBalance + deipositeAmount;



    // clear input field

    depositInput.value = '';
})



// withdraw amount section

document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawinputfield = document.getElementById('withdraw-amount');
    const withdrawInputText = withdrawinputfield.value;
    const withdrawInputAmount = parseFloat(withdrawInputText);

    // withdraw box

    const withdrawBox = document.getElementById('withdraw-total');
    const withdrawTotalBox = withdrawBox.innerText;
    const withdrawAmount = parseFloat(withdrawTotalBox);


    // Total withdraw amount

    const totalWithdrawAmount = withdrawInputAmount + withdrawAmount;
    withdrawBox.innerText = totalWithdrawAmount;

    // reduced total balance

    const updateBalance = document.getElementById('total-balance');
    const updateBalancetext = updateBalance.innerText;
    const updateBalanceAmount = parseFloat(updateBalancetext);

    updateBalance.innerText = updateBalanceAmount - withdrawInputAmount;


    // clear withdrawbox
    withdrawinputfield.value = '';

})