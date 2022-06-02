const form = document.getElementById('form');
const loanAmountInput = document.getElementById('loan-amount');
const rateInput = document.getElementById('loan-rate');
const yearsInput = document.getElementById('years');
const output = document.getElementById('output');

form.addEventListener('submit', (e) => {
    e.preventDefault;
    
    const loan = loanAmountInput.value;
    const rate = rateInput.value;
    const years = yearsInput.value;

    let total = Math.pow((1 + (rate /100)), years) * loan;

    output.innerHTML = '$' + total.toFixed(2);
    output.classList.remove('hide');
})