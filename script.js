let quote = document.getElementById("quote");
let autor = document.getElementById("autor");
let btn = document.getElementById("btn")

const url="https://api.quotable.io/random";

let getQuote= ()=>{
    fetch(url)
    .then((data)=>data.json())
    .then((item)=>{
        quote.innerText= item.content;
        autor.innerText=item.author;
        
    })
}
window.addEventListener("load",getQuote)
btn.addEventListener("click",getQuote)