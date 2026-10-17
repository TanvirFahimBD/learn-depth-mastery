const url = "http://api.quotable.io/random";
const blockquote = document.querySelector(".quote-box blockquote")
const span = document.querySelector(".quote-box span")

async function getQuote(){
    const res = await fetch(url);
    const data = await res.json();
    const {author, content} = data;
    blockquote.innerHTML = content;
    span.innerHTML = author;
}

getQuote();


function tweet(){
    window.open(`https://twitter.com/intent/tweet?text=${blockquote.innerHTML} --- By ${span.innerHTML}`, "Tweet Window", "width=600, height=300");    
}