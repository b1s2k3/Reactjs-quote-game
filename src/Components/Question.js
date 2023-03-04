const Question = ({ data, currentIndex }) => {
  const shownQuote = data[currentIndex];
  return (
    <div className="question-container">
      <h2 key={shownQuote.id}>"{shownQuote.quote}"</h2>
    </div>
  );
};

export default Question;
