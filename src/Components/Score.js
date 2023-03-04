const Score = ({ trueScore, falseScore, emptyScore }) => {
  const result = Math.ceil((100 / 30) * trueScore);

  return (
    <div className="score-container">
      <div className="score-details">
        <h2>True: {trueScore}</h2>
        <h2>False: {falseScore}</h2>
        <h2>Unanswered: {emptyScore}</h2>
      </div>
      <h1 className="result">Your Score: {result} out of 100</h1>
    </div>
  );
};

export default Score;
