var quotes = [
     {quote:'“Be yourself; everyone else is already taken.”',author:"― Oscar Wilde"},
     {quote:'“So many books, so little time.”',author:"― Frank Zappa"},
     {quote:'“Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.”',author:"― Albert Einstein"},
     {quote:'“A room without books is like a body without a soul.”',author:"― Marcus Tullius Cicero"},
     {quote:'“Be who you are and say what you feel, because those who mind don\'t matter, and those who matter don\'t mind.”',author:"― Bernard M. Baruch"},
     {quote:'“You only live once, but if you do it right, once is enough.”',author:"― Mae West"},
]


var lastRandom=-1
function generateQuotes() {
 

    var randomNumber = Math.floor(Math.random() * quotes.length)
    while (randomNumber == lastRandom) {
        randomNumber = Math.floor(Math.random() * quotes.length)
    }
    document.getElementById('demo').innerHTML=`<p id="quote"> ${quotes[randomNumber].quote}
            </p>
            <span id="author" class='fst-italic text-muted'>${quotes[randomNumber].author}</span>`

   lastRandom=randomNumber
}
