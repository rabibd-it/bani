const loadQuote = async () => {
    const response = await fetch('https://api.kanye.rest/');
    const data = await response.json();
    return displayQuote(data);
}

loadQuote();

// Disple Quote
const displayQuote = quote => {
    document.getElementById('quote').innerText = quote.quote;
}


document.getElementById('quote-btn').addEventListener('click', () => {
    // System 1
    //location.reload();

    //  System 2
    loadQuote();
});