// fist btn calculate function

document.getElementById('donate-btn-1')
    .addEventListener('click', function () {
        // Validation function
        const inputNumber = getInputByIdValue('input-money-value-1');
        if (isNaN(inputNumber)) {
            alert('Your input is not a number');
            document.getElementById('input-money-value-1').value = '';
            return;
        }

        // get feni donate blance 
        const textNumber = getTextbyIdValue('feni-donate-balance');
        const newBalance = inputNumber + textNumber;
        console.log(newBalance);
        document.getElementById('feni-donate-balance').innerText = newBalance;
        // Main balanace 
        const mainBalance = getTextbyIdValue('main-balanace');
        const mainBalanceUpdate = mainBalance + inputNumber;
        document.getElementById('main-balanace').innerText = mainBalanceUpdate;

        // input reset
        document.getElementById('input-money-value-1').value = '';

        // Time setup
        const donateTime = new Date();

        // Add transaction history
        const div = document.createElement('div');
        div.innerHTML = `
        <div class = "bg-orange-200 rounded-lg py-5 px-5 text-black my-5">
            <h3 class ="text-2xl py-5 underline font-semibold text-black text-center rounded-md">Prement history</h3>
            <p class ="text-xl font-semibold">Total amount : <span class = "text-orange-500">${mainBalanceUpdate}</span> Tk</p>
            <p>Fani donation total amount : ${newBalance} Tk</p>
            <p>Fani donation amount : ${inputNumber} Tk</p>
            <p class ="text-green-600">${donateTime}</p>
            
        </div>
    `

        document.getElementById('donate-moneyihistory').appendChild(div);



    })


// Donate history btn click

document.getElementById('transaction-history-btn')
    .addEventListener('click', function () {
        const classRemove = document.getElementById('donate-moneyihistory');
        classRemove.classList.remove('hidden');
        removeAttribute('hidden');
    })

// donate btn hiden donate history
document.getElementById('donation-btn')
    .addEventListener('click', function () {
        const classRemove = document.getElementById('donate-moneyihistory');
        classRemove.classList.add('hidden');
        removeAttribute('hidden');
    })