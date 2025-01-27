const quote = document.querySelector('#quote');
const author = document.querySelector('#author');
const button = document.querySelector('#button');
const sound = document.querySelector('.sound');
const copy = document.querySelector('.copy');
const twitter = document.querySelector('.twitter');

const urlAPI = "https://api.api-ninjas.com/v1/quotes";
const keyAPI = "KOx/GEWfFXJp5nL233sa2w==RTxzX3YfeNBSWfPG";

//fetch API
const getQuote = () => {

    fetch(urlAPI, {
        headers: {
            'X-Api-Key': keyAPI
        },
    }).then(response => response.json())
        .then(item => {
            quote.textContent = item[0].quote;
            author.textContent = item[0].author;
        });

};
getQuote();
button.addEventListener('click', getQuote);

// text-to-speech
sound.addEventListener('click', () => {
    // the SpeechSynthesisUtterance is a web speech api that represents a speech request
    let utterance = new SpeechSynthesisUtterance(`${quote.innerText} by ${author.innerText}`);
    speechSynthesis.speak(utterance);
});

//Copying Text to Clipboard
// Clipboard is a temporary storage area is used to store text that is copy or cut.
copy.addEventListener('click', () => {
   navigator.clipboard.writeText(quote.innerText);
});
