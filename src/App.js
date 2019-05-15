import React, { useState } from 'react';
import './App.css';
import { Registration } from './Registration';
import { Game } from './Game';
import { gameStatus } from './gameService';

function App() {
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const [mark, setMark] = useState('');
  const [winner, setWinner] = useState('');
  const [board, setBoard] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ]);

  const handleNewGame = (player1, player2) => {
    setPlayer1(player1);
    setPlayer2(player2);
    setMark('X');
  };

  const handleCellClicked = (rowIndex, colIndex) => {
    const _board = board.map(row => [...row]);
    let _mark = mark;
    // prettier-ignore
    _board[rowIndex][colIndex] = mark;
    setBoard(_board);
    if (gameStatus(_board, _mark) === mark) {
      setWinner(mark);
      return;
    }
    mark === 'X' ? setMark('O') : setMark('X');
  };

  return (
    <div className="App">
      <header className="App__header">
        <h1 data-testid="heading" className="App__heading">
          Tic Tac Toe
        </h1>
      </header>
      {player1 && player2 ? (
        <Game
          player1={player1}
          player2={player2}
          board={board}
          onCellClicked={handleCellClicked}
          mark={mark}
        />
      ) : (
        <Registration onNewGame={handleNewGame} />
      )}
      {winner && (
        <div data-testid="winner-message" className="winner-message">
          The winner is {mark === 'X' ? player1 : player2}
        </div>
      )}
    </div>
  );
}

export default App;
