import React, { useEffect } from "react";

const Choices = ({ data, currentIndex, setSelected, choices, setChoice }) => {
  const createChoices = () => {
    const allIndex = [currentIndex];
    while (allIndex.length < 4) {
      const randomIndex = Math.floor(Math.random() * 30);
      if (allIndex.indexOf(randomIndex) === -1) {
        allIndex.push(randomIndex);
      }
    }
    const reOrdered = allIndex.sort((a, b) => a - b);
    setChoice({
      A: data[reOrdered[0]].author,
      B: data[reOrdered[1]].author,
      C: data[reOrdered[2]].author,
      D: data[reOrdered[3]].author,
    });
  };

  useEffect(() => {
    createChoices();
  }, [currentIndex]);

  return (
    <div className="choices">
      <ul>
        {Object.entries(choices).map(([key, value]) => (
          <button onClick={() => setSelected(value)} className="option">
            <li>
              {key}: {value}
            </li>
          </button>
        ))}
      </ul>
    </div>
  );
};

export default Choices;
