import React from 'react';

const QuoteBox = ({author, text, fetchQuote}) => (
  <div id="quote-box">
    <div id="text">{text}</div>
    <div id="author">- {author}</div>
    <div>
      <a id="tweet-quote" href={`https://twitter.com/intent/tweet?text=${text}%20-%20${author}`}>
        <img width="50px" src="Twitter_Social_Icon_Circle_Color.png" />
      </a>
    </div>
    <div>
      <button id="new-quote" onClick={fetchQuote}>New Quote</button>
    </div>
  </div>
)

// const parseQuote = (text) => {
//   return {__html: text}
// }

export default QuoteBox;
