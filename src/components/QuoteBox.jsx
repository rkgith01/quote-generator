/* eslint-disable react/prop-types */
// import React from 'react'
import { useState } from "react";
import { RiTwitterXFill, RiRefreshLine, RiFileCopy2Line } from "react-icons/ri";

const QuoteBox = ({ quote, author, handleNewQuote, handleTweetQuote }) => {
  const [copied, setCopied] = useState(false);

  // Function to copy the quote to the clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(`${quote} - ${author}`);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <>
      <div
        id="quote-box"
        className="w-3/4 md:w-1/2 bg-gray-950 text-white p-6 rounded-lg shadow-lg text-center font-mono"
      >
        <button
          id="copy-quote"
          onClick={copyToClipboard}
          className="bg-blue-500 text-white py-1 px-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 flex items-center justify-center"
        >
          {copied ? (
            <span className="mr-1">Copied!</span>
          ) : (
            <RiFileCopy2Line className="mx-2 my-2 h-5 w-5" />
          )}
        </button>
        <div id="text" className="lg:text-2xl md:text-xl sm:text-lg mb-4">
          {quote}
        </div>
        <div id="author" className="lg:text-2xl md:text-xl sm:text-lg text-base mb-4">
          - {author}
        </div>
        <div className="px-2 flex items-center justify-center">
          <button
            id="new-quote"
            onClick={handleNewQuote}
            className="bg-blue-600 text-white py-2 px-4 rounded-md mr-2 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 flex items-center justify-center"
          >
            <RiRefreshLine className="h-7 w-7" />
          </button>
          <button
            id="tweet-quote"
            onClick={handleTweetQuote}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 flex items-center justify-center"
          >
            <RiTwitterXFill className="h-7 w-7" />
          </button>
        </div>
      </div>
    </>
  );
};

export default QuoteBox;
