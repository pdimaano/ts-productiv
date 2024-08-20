import "./QuoteDisplay.css";
import { QuoteInterface } from "./interfaces";

/** QuoteDisplay component that shows a quote
 * and a button that will retrieve a new quote
 *
 * Props:
 * - getQuote: fn() that retrieves a random quote from API
 * - quote: state of current quote
 *
 * State: none
 */


interface QuoteDisplayProps {
  getQuote: () => void;
  quote: QuoteInterface | null;
}

function QuoteDisplay({ getQuote, quote }: QuoteDisplayProps) {
  return (
    quote ? (
      <div className="QuoteDisplay">
        <p><i>"{quote.text} - {quote.author}"</i></p>
        <button
          className="btn-sm QuoteDisplay-button"
          onClick={getQuote}>New Quote
        </button>
      </div>
    ) : (
      <div className="QuoteDisplay">
        <button
          className="btn-sm QuoteDisplay-button"
          onClick={getQuote}>Click here for a new quote!
        </button>
      </div>
    )
  );
};

export default QuoteDisplay;