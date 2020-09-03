export default (board, pressures, r_idx, c_idx, black) => {
  if (black) {
    const i = r_idx + 1;
    if (i > 7) return;
    [c_idx + 1, c_idx - 1].forEach((j) => {
      const pieceOnSquare = board[i][j];
      const blackPressureSquare = pressures['black'][i][j];
      if (j > 7 || j < 0) return;
      if (pieceOnSquare < 0) {
        blackPressureSquare[1] += 1
      } else {
        blackPressureSquare[0] += 1
      }
    });
  } else {
    const i = r_idx - 1;
    if (i < 0) return;
    [c_idx + 1, c_idx - 1].forEach((j) => {
      const pieceOnSquare = board[i][j];
      const whitePressureSquare = pressures['white'][i][j];
      if (j > 7 || j < 0) return;
      if (pieceOnSquare > 0) {
        whitePressureSquare[1] += 1
      } else {
        whitePressureSquare[0] += 1
      }
    });
  }
};
