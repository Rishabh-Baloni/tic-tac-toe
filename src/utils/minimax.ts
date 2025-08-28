// Minimax algorithm for Tic-Tac-Toe AI
import { CellValue } from '../components/GameBoard';
import { checkWinner, checkDraw } from './gameLogic';

export function getBestMove(board: CellValue[]): number {
  // Imperfection: 20% chance to pick a random move
  const emptyIndices = board.map((cell, idx) => cell === null ? idx : -1).filter(idx => idx !== -1);
  if (Math.random() < 0.2 && emptyIndices.length > 0) {
    return emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
  }
  let bestScore = -Infinity;
  let move = -1;
  for (let i = 0; i < board.length; i++) {
    if (board[i] === null) {
      board[i] = 'O';
      const score = minimax(board, 0, false);
      board[i] = null;
      if (score > bestScore) {
        bestScore = score;
        move = i;
      }
    }
  }
  return move;
}

function minimax(board: CellValue[], depth: number, isMaximizing: boolean): number {
  const { winner } = checkWinner(board);
  if (winner === 'O') return 10 - depth;
  if (winner === 'X') return depth - 10;
  if (checkDraw(board)) return 0;

  if (isMaximizing) {
    let bestScore = -Infinity;
    for (let i = 0; i < board.length; i++) {
      if (board[i] === null) {
        board[i] = 'O';
        bestScore = Math.max(bestScore, minimax(board, depth + 1, false));
        board[i] = null;
      }
    }
    return bestScore;
  } else {
    let bestScore = Infinity;
    for (let i = 0; i < board.length; i++) {
      if (board[i] === null) {
        board[i] = 'X';
        bestScore = Math.min(bestScore, minimax(board, depth + 1, true));
        board[i] = null;
      }
    }
    return bestScore;
  }
}
