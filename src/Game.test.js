import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import { Game } from './Game';

afterEach(cleanup);

test('should not click an occupied cell', () => {
  // prettier-ignore
  const board = [
      ['', 'X', ''],
      ['', 'O', ''],
      ['', '', ''],
    ];
  const onCellClicked = jest.fn();
  const player1 = 'Tomas';
  const player2 = 'Jonas';
  const { queryByText } = render(
    <Game
      onCellClicked={onCellClicked}
      board={board}
      player1={player1}
      player2={player2}
    />
  );
  fireEvent.click(queryByText('X'));
  expect(onCellClicked).not.toHaveBeenCalled();
});
