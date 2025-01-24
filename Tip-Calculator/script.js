// select people
const NoOfPeople = document.querySelector(".No-people");

// Increment by One
const PlusSum = document.querySelector('.plus');
let count = 1;
PlusSum.addEventListener('click', () => {
    count++;
    NoOfPeople.innerText = count;
});

// Decrement by One
const MinusSum = document.querySelector('.minus');
MinusSum.addEventListener('click', () => {
    if (count > 1) {
        count--;
    }
    NoOfPeople.innerText = count;
});

// Calculate
const calculate = document.querySelector('#calculator');
const Summery = document.querySelector('.total-per-person');

calculate.addEventListener('click', () => {
    // show summary tab
    Summery.style.display = 'block';

    //calculating tips
    const totalBill = Number(document.querySelector('#totalBill').value);
    const tipAmount = Number(document.querySelector('#tip').value);

    let total = totalBill * (tipAmount / 100);

    // display on summary tab
    const display_totalBill = document.querySelector('#display_totalBill');
    const display_tipAmount = document.querySelector('#display_tipAmount');


    display_totalBill.innerHTML = totalBill;
    display_tipAmount.innerHTML = total;
    const tax = document.querySelector('#tax').innerHTML = (totalBill + 5) / 100;

    // final calculation
     let finalPeople = NoOfPeople.innerText;
     document.querySelector("#toalPerPerson").innerHTML = 
     ((totalBill + total + tax) / finalPeople).toFixed(2);
});