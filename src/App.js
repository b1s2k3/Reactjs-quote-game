import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

import Question from "./Components/Question";
import Choices from "./Components/Choices";
import Header from "./Components/Header";
import Score from "./Components/Score";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [choices, setChoice] = useState({ A: null, B: null, C: null, D: null });

  const [currentIndex, setIndex] = useState(0);
  const [selected, setSelected] = useState("");

  const [trueScore, setTrue] = useState(0);
  const [falseScore, setFalse] = useState(0);
  const [emptyScore, setEmpty] = useState(0);

  useEffect(() => {
    async function fetchData() {
      await axios
        .get("https://dummyjson.com/quotes")
        .then((response) => {
          setData(response.data.quotes);
          setLoading(false);
        })
        .cath((error) => console.log(error));
    }
    fetchData();
  }, []);
  
  const next = () => {
    setIndex(currentIndex + 1);
    if (selected === data[currentIndex].author) {
      setTrue(trueScore + 1);
    } else if (selected === null) {
      setEmpty(emptyScore + 1);
    } else {
      setFalse(falseScore + 1);
    }
    setSelected(null);
  };

  if (!loading && currentIndex <= 29) {
    return (
      <div>
        <Header />
        <div className="App">
          <h3>{currentIndex + 1} / 30</h3>
          <Question data={data} currentIndex={currentIndex} />
          <Choices
            data={data}
            currentIndex={currentIndex}
            setSelected={setSelected}
            choices={choices}
            setChoice={setChoice}
          />
          {currentIndex < 29 ? (
            <button onClick={next} className="btn-next">
              Next
            </button>
          ) : (
            <button className="btn-score" onClick={next}>
              Show Result
            </button>
          )}
        </div>
      </div>
    );
  } else if (!loading && currentIndex > 29) {
    return (
      <Score
        trueScore={trueScore}
        falseScore={falseScore}
        emptyScore={emptyScore}
      />
    );
  } else {
    return <h1 className="loading">Loading..</h1>;
  }
}

export default App;
