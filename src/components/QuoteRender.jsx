/* eslint-disable react-hooks/exhaustive-deps */
// import React from 'react'

import { useEffect, useState } from "react";
import QuoteBox from "./QuoteBox";


let api = "https://api.quotable.io/random"

const QuoteRender = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("#f4f4f4");

  const fetchRandomQuote = async () => {
    try {
      const response = await fetch(api);
      if (!response.ok) {
        throw new Error("Failed to fetch quote");
      }
      const data = await response.json();
      setQuote(data.content);
      setAuthor(data.author);
      setRandomBackgroundColor();
    } catch (error) {
      console.error(error);
    }
  };

  const handleNewQuote = () => {
    fetchRandomQuote();
  };
  const setRandomBackgroundColor = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setBackgroundColor(randomColor);
  };

  const handleTweetQuote = () => {
    window.open(`https://twitter.com/intent/tweet?text="${quote}" - ${author}`);
  };

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  return (
    <>
      <div
        className="flex flex-col gap-2 items-center justify-center min-h-screen bg-gray-600"
        style={{ backgroundColor }}
      >
        <img
          src="/logo.png"
          alt="logo"
          className="w-[150px] md:w-[100px] py-6"
        />
        <p className="text-2xl font-semibold font-serif">
          Quote Generator + X{" "}
        </p>
        {/* <div
      id="quote-box"
      className="w-3/4 md:w-1/2 bg-white p-6 rounded-lg shadow-lg text-center"
    >
      <div id="text" className="text-lg mb-4">
        {quote}
      </div>
      <div id="author" className="text-base mb-4">
        - {author}
      </div>
      <div className="px-2 flex items-center justify-center">
        <button
          id="new-quote"
          onClick={handleNewQuote}
          className="bg-blue-500 text-white py-2 px-4 rounded-md mr-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 flex items-center justify-center"
        >
          <RiRefreshLine className="mr-2 h-6 w-6"/> 
        </button>
        <button
          id="tweet-quote"
          onClick={handleTweetQuote}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 flex items-center justify-center"
        >
          <RiTwitterXFill className="mr-2 h-6 w-6" />
        </button>
      </div>
    </div> */}
        <QuoteBox
          quote={quote}
          author={author}
          handleNewQuote={handleNewQuote}
          handleTweetQuote={handleTweetQuote}
        />
      </div>
      <footer style={{ backgroundColor }}>
        <div className="flex flex-col gap-2 items-center justify-center">
          <p className="text-lg font-thin font-serif">
            A quote generator & direct tweet webapp by{" "}
            <a
              target="_blank"
              className="text-blue-500 hover:font-bold"
              href="https://rajkapadia-dev.vercel.app/"
            >
              Raj Kapadia
            </a>{" "}
          </p>
        </div>
      </footer>
    </>
  );
};

export default QuoteRender;
