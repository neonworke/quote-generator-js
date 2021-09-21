    const today = new Date();
    const hourNow = today.getHours();
    const displayText = document.querySelector('.quote-heading');
    if(hourNow >= 0 && hourNow < 12) {
        greeting = "morning";
    } else if(hourNow >= 12 && hourNow < 18) {
        greeting = "afternoon";
    } else { 
        greeting="evening";
    }

    displayText.innerHTML = `Let's start our ${greeting} with a new quote`;

// const colors = ["red","yellow","blue","green","black","purple","orange","cyan","grey","cornflower"];


// Collection Of Quote
const quotes = [{
    quote: `I'm not a great programmer; I'm just a good programmer with great habits.`,
    author: `&#8212;Kent Beck`
}, {
    quote: `Talk is cheap. Show me the code.`,
    author: `&#8212;Linus Torvalds`
}, {
    quote: `Programs must be written for people to read, and only incidentally for machines to execute.`,
    author: `&#8212;Harold Abelson`
}, {
    quote: `Truth can only be found in one place: the code.`,
    author: `&#8212;Robert C`
}, {
    quote: `Give a man a program, frustrate him for a day. Teach a man to program, frustrate him for a lifetime.`,
    author: `&#8212;Muhammad Waseem`
}, {
    quote: `How you look at it is pretty much how you'll see it`,
    author: `&#8212;Steve Jobs`

}, {
    quote: `The most disastrous thing that you can ever learn is your first programming language.`,
    author: `&#8212;Alan Kay`
}, {
    quote: `The most important property of a program is whether it accomplishes the intention of its user.`,
    author: `&#8212;C.A.R. Hoare`
}, {
    quote: `i am committed to push my branch to the master.`,
    author: `&#8212;Halgurd Hussein`
}, {
    quote: `Coding is not just code, that is a live thing to serve everyone!`,
    author: `&#8212;Ming Song`
}, ]

// New Quote Button
const quoteBtn = document.getElementById('quote-btn');
// Get Quote and author Section
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const container = document.querySelector('body')
const txtcolor = document.querySelector('.quote');
const icon = document.querySelector('.icon');
const btn = document.querySelector('button');
// Event Handler
quoteBtn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = quotes[random].quote;
    author.innerHTML = quotes[random].author;
    let color = '#';
    color += Math.random().toString(16).slice(2,8);
    container.style.background = color;
    txtcolor.style.color = color;
    author.style.color = color;
    icon.style.color = color;
    btn.style.backgroundColor = color;
})