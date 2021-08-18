
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const InputAmountText = inputField.value;
    const AmountValue = parseFloat(InputAmountText);
    inputField.value = '';

    return AmountValue;


}

function updateTotalField(TotalfieldId, amount) {
    const TotalElement = document.getElementById(TotalfieldId);
    const NewAmountText = TotalElement.innerText;
    const newAmount = parseFloat(NewAmountText);
    TotalElement.innerText = newAmount + amount;
}


function getCurrentBalance() {
    const balanceTotal = document.getElementById('total-balance');
    const balancetotalText = balanceTotal.innerText;
    const previousTotalBalance = parseFloat(balancetotalText);
    return previousTotalBalance;
}
// update all balance

function updateBalence(amount, isAdd) {
    const balanceTotal = document.getElementById('total-balance');
    /*  const balancetotalText = balanceTotal.innerText;
     const previousTotalBalance = parseFloat(balancetotalText); */

    const previousTotalBalance = getCurrentBalance();


    if (isAdd == true) {
        balanceTotal.innerText = previousTotalBalance + amount;

    }
    else {
        balanceTotal.innerText = previousTotalBalance - amount;

    }

}



document.getElementById('deposit-button').addEventListener('click', function () {
    //    step1 find the input content
    // const depositInput = document.getElementById('deposite-amount');
    // const depositAmountText = depositInput.value;
    // const deipositeAmount = parseFloat(depositAmountText);
    const deipositeAmount = getInputValue('deposite-amount');
    if (deipositeAmount > 0) {
        updateTotalField('current-deposite', deipositeAmount);
        updateBalence(deipositeAmount, true);
    }


    // get current deposite amount

    // const currentDepositeAmount = document.getElementById('current-deposite');
    // const newDepositeAmountText = currentDepositeAmount.innerText;
    // const newDepositeAmount = parseFloat(newDepositeAmountText);
    // get total current deposite

    // currentDepositeAmount.innerText = newDepositeAmount + deipositeAmount;

    // update balance

    /* const balanceTotal = document.getElementById('total-balance');
    const balancetotalText = balanceTotal.innerText;
    const previousTotalBalance = parseFloat(balancetotalText);


    balanceTotal.innerText = previousTotalBalance + deipositeAmount; */




    // clear input field


});



// withdraw amount section

document.getElementById('withdraw-button').addEventListener('click', function () {
    // const withdrawinputfield = document.getElementById('withdraw-amount');
    // const withdrawInputText = withdrawinputfield.value;
    // const withdrawInputAmount = parseFloat(withdrawInputText);
    const withdrawInputAmount = getInputValue('withdraw-amount');
    const currentBalance = getCurrentBalance();
    if (withdrawInputAmount > 0 && withdrawInputAmount < currentBalance) {
        updateTotalField('withdraw-total', withdrawInputAmount);
        updateBalence(withdrawInputAmount, false);

    }
    if (withdrawInputAmount > currentBalance) {
        console.log('Your account is too poor');
    }

    // withdraw box

    /* const withdrawBox = document.getElementById('withdraw-total');
    const withdrawTotalBox = withdrawBox.innerText;
    const withdrawAmount = parseFloat(withdrawTotalBox); */


    // Total withdraw amount

    // const totalWithdrawAmount = withdrawInputAmount + withdrawAmount;
    // withdrawBox.innerText = totalWithdrawAmount;

    // reduced total balance

    /* const updateBalance = document.getElementById('total-balance');
    const updateBalancetext = updateBalance.innerText;
    const updateBalanceAmount = parseFloat(updateBalancetext);

    updateBalance.innerText = updateBalanceAmount - withdrawInputAmount; */

    // clear withdrawbox
    // withdrawinputfield.value = '';

})