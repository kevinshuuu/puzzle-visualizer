import Chess from 'chess.js';

export const computeMove = (board, move) => {
  const engine = new Chess(board);
  engine.move(move);
  return engine.fen();
};

export const dropPiece = ({sourceSquare, targetSquare, piece}, fen, setFen) => {
  const engine = new Chess(fen);
  engine.move({ from: sourceSquare, to: targetSquare });
  const nextFen = engine.fen();
  setFen(nextFen);
};