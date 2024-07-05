
import './QuoteList.css';

// eslint-disable-next-line react/prop-types
const QuoteList = ({ savedQuotes }) => {
  return (
    <div className="quote-list">
      <h2>Saved Quotes</h2>
      {savedQuotes.length > 0 ? (
        // eslint-disable-next-line react/prop-types
        savedQuotes.map((quote, index) => <p key={index}>{quote}</p>)
      ) : (
        <p>No saved quotes</p>
      )}
    </div>
  );
};

export default QuoteList;
