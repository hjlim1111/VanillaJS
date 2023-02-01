const quotes = [
  {
    quote:
      "Think not those faithful who praise all your words and actions. but those who kindly reprove your faults.",
    author: "Socrates",
  },
  {
    quote:
      "If you hate a person, you hate something in him that is part of yourself.",
    author: "Hermann Karl Hesse",
  },
  {
    quote:
      "Whether you believe you can do a thing or not, will be you believe.",
    author: "Henny Ford",
  },
  {
    quote:
      "The direction in which education starts a man will determine his future life.",
    author: "Platon",
  },
  {
    quote:
      "We could never learn to be brave and patient, if there were only joy in the world.",
    author: "Helen Adams Keller",
  },
  {
    quote: "What makes the desert beautiful is that somewhere it hides a well.",
    author: "Antoine Marie Jean-Baptiste Roger de Saint-Exupéry",
  },
  {
    quote: "Nothing is more despicable than respect based on fear.",
    author: "Albert Camus",
  },
  {
    quote: "He makes no friend who never made a foe.",
    author: "Alfred, Lord Tennyson",
  },
  {
    quote: "I'd rather be hated for who I am, than loved for who I am not.",
    author: "Kurt Cobain",
  },
  {
    quote: "No one is a friend to his friend who does not love in return.",
    author: "Platon",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

/*
Math.round : 반올림
Math.ceil : 천장까지 올림. 1.1도 2로 올림
Math.floor : 마루까지 내림 1.9도 1
*/

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
