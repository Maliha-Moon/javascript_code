// using array

const randomQuote = [
    "Be the change that you wish to see in the world.",
    "In the middle of every difficulty lies opportunity.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    "It does not matter how slowly you go as long as you do not stop."
];

const quote = document.querySelector('#quote');
const author = document.querySelector('#author');
const button = document.querySelector('#button');

function auotoQuote() {
    const quoteIndex = Math.floor(Math.random() * 5);
    quote.textContent = randomQuote[quoteIndex];
}

auotoQuote();
button.addEventListener('click', auotoQuote);
