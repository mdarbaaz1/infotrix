import React, { useState, useEffect } from "react";

const Quotes = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = () => {
    let url = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        let dataq = data.quotes;
        let randomNum = Math.floor(Math.random() * dataq.length);
        let randomQuote = dataq[randomNum];

        setQuote(randomQuote.quote);
        setAuthor(randomQuote.author);
      });
  };

  const handleClick = () => {
    getQuote();
  };

  return (
    <div className="quotebox ">
      <div className="text-1 c">
        <h1 className="Qoute-head">Welcome to your Qoute of the day</h1>
        <div className="quote">
          <div className="text Qoute-text">
            <p>{quote}</p>
          </div>
          <div className="author">
            <p>"Author"--{author}</p>
          </div>
          <button onClick={handleClick} className="btn">
            Generate Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quotes;
