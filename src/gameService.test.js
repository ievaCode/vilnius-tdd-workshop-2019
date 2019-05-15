import { gameStatus } from './gameService';

test('X should win in compbination 1', () => {
  // prettier-ignore
  const board = [
    ['X', 'X', 'X'],
    ['', '', ''],
    ['O', '', ''],
  ];
  const mark = 'X';
  expect(gameStatus(board, mark)).toBe('X');
});

test('X should win in compbination 2', () => {
  // prettier-ignore
  const board = [
    ['', '', ''],
    ['X', 'X', 'X'],
    ['', '', ''],
  ];
  const mark = 'X';
  expect(gameStatus(board, mark)).toBe('X');
});

test('X should win in compbination 3', () => {
  // prettier-ignore
  const board = [
      ['', 'X', ''],
      ['', 'X', ''],
      ['', 'X', ''],
    ];
  const mark = 'X';
  expect(gameStatus(board, mark)).toBe('X');
});

test('X should win in compbination 4', () => {
  // prettier-ignore
  const board = [
      ['', '', 'X'],
      ['', 'X', ''],
      ['X', '', ''],
    ];
  const mark = 'X';
  expect(gameStatus(board, mark)).toBe('X');
});

test('o should win', () => {
  // prettier-ignore
  const board = [
    ['O', 'O', 'O'],
    ['', '', ''],
    ['', '', ''],
  ];
  const mark = 'O';
  expect(gameStatus(board, mark)).toBe('O');
});
