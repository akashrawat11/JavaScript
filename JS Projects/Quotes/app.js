const quote = document.querySelector('.quote');
const writer = document.querySelector('.writer');
const nextQuote = document.querySelector('.newQuote');

let quotes = [];

async function getQuotes(){
    fetch("https://type.fit/api/quotes").then(function(response) {
    return response.json();
        }).then(function(data) {
            quotes = data;
            changeQuote();
        });
}

function changeQuote(){
    const random = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = quotes[random].text;
    if (quotes[random].author === null){
        writer.innerHTML = "- Anonymous";
    }else{
        writer.innerHTML = "- " + quotes[random].author;
    }
}

nextQuote.addEventListener('click', ()=>{
    changeQuote();
})

getQuotes();


