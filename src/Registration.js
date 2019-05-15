import React, { useState } from 'react';

export function Registration({ onNewGame }) {
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');

  return (
    <div className="registration" data-testid="registration">
      <input
        className="registration__input"
        data-testid="player1"
        onChange={evt => setPlayer1(evt.target.value)}
      />
      <input
        className="registration__input"
        data-testid="player2"
        onChange={evt => setPlayer2(evt.target.value)}
      />
      <button
        className="registration__button"
        data-testid="new-game"
        onClick={() => {
          if (player1 && player2) {
            onNewGame(player1, player2);
          }
        }}
      >
        new game
      </button>
    </div>
  );
}
