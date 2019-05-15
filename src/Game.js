import React from 'react';

export const Game = ({ player1, player2, board, onCellClicked, mark }) => {
  return (
    <div className="game-space">
      <p
        className={
          mark === 'X' ? 'game-space__player active' : 'game-space__player'
        }
        data-testid="player1-title"
      >
        {player1}
      </p>
      <table className="board">
        <tbody className="board__wrapper">
          {board.map((row, rowIndex) => (
            <tr key={rowIndex} className="board__row">
              {row.map((cell, colIndex) => (
                <td
                  key={colIndex}
                  className="board__cell"
                  onClick={board =>
                    cell === '' && onCellClicked(rowIndex, colIndex)
                  }
                  style={{
                    cursor: cell === '' ? 'pointer' : 'inherit'
                  }}
                  data-testid={colIndex}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <p
        className={
          mark === 'O' ? 'game-space__player active' : 'game-space__player'
        }
        data-testid="player2-title"
      >
        {player2}
      </p>
    </div>
  );
};
