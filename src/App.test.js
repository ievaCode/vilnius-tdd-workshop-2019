import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import App from './App';
import { gameStatus } from './gameService';

afterEach(cleanup);

it('renders name correctly', () => {
  const { queryByTestId } = render(<App />);
  expect(queryByTestId('heading').textContent).toBe('Tic Tac Toe');
});

it('does not show registration during the game', () => {
  const { queryByTestId, queryByText } = render(<App />);
  const inputNode1 = queryByTestId('player1');
  const inputNode2 = queryByTestId('player2');
  fireEvent.change(inputNode1, { target: { value: 'Tomas' } });
  fireEvent.change(inputNode2, { target: { value: 'Jonas' } });
  fireEvent.click(queryByText('new game'));
  expect(queryByTestId('registration')).toBeFalsy();
});

it('two players can play and active is indicated', () => {
  const { queryByTestId, queryByText, queryAllByTestId } = render(<App />);
  const inputNode1 = queryByTestId('player1');
  const inputNode2 = queryByTestId('player2');
  fireEvent.change(inputNode1, { target: { value: 'Tomas' } });
  fireEvent.change(inputNode2, { target: { value: 'Jonas' } });
  fireEvent.click(queryByText('new game'));

  var active = document.getElementsByClassName('active')[0];
  expect(queryByTestId('player1-title')).toEqual(active);

  fireEvent.click(queryAllByTestId('0')[0]);
  expect(queryByText('X')).toBeTruthy();

  active = document.getElementsByClassName('active')[0];
  expect(queryByTestId('player2-title')).toEqual(active);

  fireEvent.click(queryAllByTestId('0')[1]);
  expect(queryByText('O')).toBeTruthy();
  fireEvent.click(queryAllByTestId('0')[2]);
  expect(queryAllByTestId('0')[0]).toEqual(queryAllByTestId('0')[2]);
});
