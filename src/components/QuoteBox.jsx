/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  RiTwitterXFill,
  RiRefreshLine,
  RiFileCopy2Line,
  RiDoubleQuotesR,
  RiDoubleQuotesL,
} from "react-icons/ri";

const QuoteBox = ({
  quote,
  author,
  handleNewQuote,
  handleTweetQuote,
  backgroundColor,
}) => {
  const [copied, setCopied] = useState(false);

  // Function to copy the quote to the clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(`${quote} - ${author}`);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  // Function to calculate appropriate text color based on background color brightness
  const getTextColor = (bgColor) => {
    const hex = bgColor.replace("#", "");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 128 ? "#000000" : "#FFFFFF";
  };

  const textColor = getTextColor(backgroundColor);

  return (
    <div
      id="quote-box"
      className="relative flex flex-col items-center max-w-lg gap-4 p-6 rounded-md shadow-md sm:py-8 sm:px-12"
      style={{ backgroundColor, color: textColor }}
    >
      <button
        id="copy-quote"
        onClick={copyToClipboard}
        className="absolute top-2 right-2"
      >
        {copied ? (
          <span style={{ color: textColor }}>Copied!</span>
        ) : (
          <RiFileCopy2Line className="w-6 h-6" style={{ color: textColor }} />
        )}
      </button>
      <div className="flex">
        
        <RiDoubleQuotesL className="w-16 h-16" style={{ color: textColor }} />
        <RiDoubleQuotesR className="w-16 h-16" style={{ color: textColor }} />
      </div>

      <h2 className="text-2xl font-semibold leading-tight tracking-wide">
        {quote ? quote : "Quotes Not Available."}
      </h2>
      <p className="flex-1 text-center">
        {author
          ? `- ${author}`
          : "No author."}
      </p>

      <div className="flex gap-4">
        <button
          id="new-quote"
          onClick={handleNewQuote}
          type="button"
          className="px-8 py-3 font-semibold rounded-full"
          style={{ backgroundColor: textColor, color: backgroundColor }}
        >
          <RiRefreshLine className="h-5 w-5 inline-block mr-2" /> New Quote
        </button>

        <button
          id="tweet-quote"
          onClick={handleTweetQuote}
          type="button"
          className="px-8 py-3 font-semibold rounded-full"
          style={{ backgroundColor: textColor, color: backgroundColor }}
        >
          <RiTwitterXFill className="h-5 w-5 inline-block mr-2" /> Tweet
        </button>
      </div>
    </div>
  );
};

export default QuoteBox;
