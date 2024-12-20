/* eslint-disable react-hooks/exhaustive-deps */
// import React from 'react'

import { useEffect, useState } from "react";
import QuoteBox from "./QuoteBox";

// let api = "http://api.quotable.io/random";
// let api = "https://api.api-ninjas.com/v1/quotes";
let api = "https://qapi.vercel.app/api/random";

const QuoteRender = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("#f4f4f4");

  const fetchRandomQuote = async () => {
    try {
      const response = await fetch(api);
      // console.log(response)
      if (!response.ok) {
        throw new Error("Failed to fetch quote");
      }

      const data = await response.json();
      // console.log(data);
      setQuote(data.quote);
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
        <QuoteBox
          quote={quote}
          author={author}
          handleNewQuote={handleNewQuote}
          handleTweetQuote={handleTweetQuote}
          backgroundColor={backgroundColor}
        />
      </div>
      <footer style={{ backgroundColor }}>
        <div className="flex flex-col gap-2 items-center justify-center">
          <p className="text-lg font-normal">
            A quote generator & direct tweet by{" "}
            <a
              target="_blank"
              className="text-blue-800 hover:font-bold"
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
