import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [score, setScore] = useState(0);
  const [message] = useState('Welcome!');
  const [data, setData] = useState('');

  useEffect(() => {
    console.log('useEffect is called');
    document.title = `${message} Your score is ${score}`;
  }, [message, score]);

  useEffect(() => {
    console.log('fetching dog image');
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((responseData) => setData(responseData.message))
      .catch((error) =>
        console.log('Error occurred while fetching and parsing data', error)
      );
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={data} alt="dog breed random" />
        <h1>{message}</h1>
        <h2>{score}</h2>
        <button onClick={() => setScore((prevScore) => prevScore + 1)}>
          Increase Score
        </button>
        <button onClick={() => setScore((prevScore) => prevScore - 1)}>
          Decrease Score
        </button>
        <button onClick={() => setScore(0)}>Reset Score</button>
      </header>
    </div>
  );
};

export default App;
