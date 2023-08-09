import React, { useState } from 'react';

const options = ['rock', 'paper', 'scissors'];

const App = () => {
  const [userChoice, setUserChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [result, setResult] = useState('');

  const handleChoice = (choice) => {
    const randomIndex = Math.floor(Math.random() * options.length);
    const computerSelection = options[randomIndex];

    setUserChoice(choice);
    setComputerChoice(computerSelection);

    if (choice === computerSelection) {
      setResult('It\'s a tie!');
    } else if (
      (choice === 'rock' && computerSelection === 'scissors') ||
      (choice === 'paper' && computerSelection === 'rock') ||
      (choice === 'scissors' && computerSelection === 'paper')
    ) {
      setResult('You win!');
    } else {
      setResult('Computer wins!');
    }
  };

  return (
    <div className="App">
      <h1>Rock Paper Scissors</h1>
      <div className="choices">
        {options.map(option => (
          <button key={option} onClick={() => handleChoice(option)}>
            {option}
          </button>
        ))}
      </div>
      <div className="result">
        <p>Your choice: {userChoice}</p>
        <p>Computer's choice: {computerChoice}</p>
        <p>{result}</p>
      </div>
    </div>
  );
}

export default App;
