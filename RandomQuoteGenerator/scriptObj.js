// using object

const randomQuote = [
    {
        quote: "Be the change that you wish to see in the world.",
        author: "Mahatma Gandhi"
    },
    {
        quote: "In the middle of every difficulty lies opportunity.",
        author: "Albert Einstein"
    },
    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill "
    },
    {
        quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
        author: "Ralph Waldo Emerson"
    },
    {
        quote: "It does not matter how slowly you go as long as you do not stop.",
        author: "Confucius"

    }
];

const quote = document.querySelector('#quote');
const author = document.querySelector('#author');
const button = document.querySelector('#button');

function auotoQuote() {
    const quoteIndex = Math.floor(Math.random() * randomQuote.length);
    quote.textContent = randomQuote[quoteIndex].quote;
    author.textContent = randomQuote[quoteIndex].author;
}

auotoQuote();
button.addEventListener('click', auotoQuote);
