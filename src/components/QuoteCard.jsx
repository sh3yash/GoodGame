
import './QuoteCard.css';

// eslint-disable-next-line react/prop-types
const QuoteCard = ({ quote, saveQuote }) => {
  return (
    <div className="quote-card">
      <p className="quote-text">{quote}</p>
      <button onClick={() => saveQuote(quote)}>Save to List</button>
    </div>
  );
};

export default QuoteCard;
