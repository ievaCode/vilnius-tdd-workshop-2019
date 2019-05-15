export function gameStatus(board, mark) {
  if (
    board[0].every(cell => cell === mark) ||
    board[1].every(cell => cell === mark) ||
    board[2].every(cell => cell === mark) ||
    (board[0][0] === mark && board[1][0] === mark && board[2][0] === mark) ||
    (board[0][1] === mark && board[1][1] === mark && board[2][1] === mark) ||
    (board[0][2] === mark && board[1][2] === mark && board[2][2] === mark) ||
    (board[0][0] === mark && board[1][1] === mark && board[2][2] === mark) ||
    (board[0][2] === mark && board[1][1] === mark && board[2][0] === mark)
  ) {
    return mark;
  }
}
