const loadQuate = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then (data => displayQuate(data))
}

const displayQuate = quote =>{
    const blockQuate = document.getElementById('quote');
    console.log(quote)
    blockQuate.innerText = quote.quote;
}