export default (board, pressures, r_idx, c_idx, black) => {
  for (let i = r_idx + 1; i < 8; i++) {
    const j = c_idx + (i-r_idx);
    if (j > 7) break;

    const pieceOnSquare = board[i][j];
    const whitePressureSquare = pressures['white'][i][j];
    const blackPressureSquare = pressures['black'][i][j];

    if (pieceOnSquare > 0) {
      black ?
        blackPressureSquare[0] += 1 :
        whitePressureSquare[1] += 1;
      break;
    } else if (pieceOnSquare < 0) {
      black ?
        blackPressureSquare[1] += 1 :
        whitePressureSquare[0] += 1
      break;
    } else {
      black ?
        blackPressureSquare[0] += 1 :
        whitePressureSquare[0] += 1
    }
  }

  for (let i = r_idx + 1; i < 8; i++) {
    const j = c_idx - (i-r_idx);
    if (j < 0) break;

    const pieceOnSquare = board[i][j];
    const whitePressureSquare = pressures['white'][i][j];
    const blackPressureSquare = pressures['black'][i][j];

    if (pieceOnSquare > 0) {
      black ?
        blackPressureSquare[0] += 1 :
        whitePressureSquare[1] += 1;
      break;
    } else if (pieceOnSquare < 0) {
      black ?
        blackPressureSquare[1] += 1 :
        whitePressureSquare[0] += 1
      break;
    } else {
      black ?
        blackPressureSquare[0] += 1 :
        whitePressureSquare[0] += 1
    }
  }

  for (let i = r_idx - 1; i >= 0; i--) {
    const j = c_idx + (r_idx-i);
    if (j > 7) break;

    const pieceOnSquare = board[i][j];
    const whitePressureSquare = pressures['white'][i][j];
    const blackPressureSquare = pressures['black'][i][j];

    if (pieceOnSquare > 0) {
      black ?
        blackPressureSquare[0] += 1 :
        whitePressureSquare[1] += 1;
      break;
    } else if (pieceOnSquare < 0) {
      black ?
        blackPressureSquare[1] += 1 :
        whitePressureSquare[0] += 1
      break;
    } else {
      black ?
        blackPressureSquare[0] += 1 :
        whitePressureSquare[0] += 1
    }
  }

  for (let i = r_idx - 1; i >= 0; i--) {
    const j = c_idx - (r_idx-i);
    if (j < 0) break;

    const pieceOnSquare = board[i][j];
    const whitePressureSquare = pressures['white'][i][j];
    const blackPressureSquare = pressures['black'][i][j];

    if (pieceOnSquare > 0) {
      black ?
        blackPressureSquare[0] += 1 :
        whitePressureSquare[1] += 1;
      break;
    } else if (pieceOnSquare < 0) {
      black ?
        blackPressureSquare[1] += 1 :
        whitePressureSquare[0] += 1
      break;
    } else {
      black ?
        blackPressureSquare[0] += 1 :
        whitePressureSquare[0] += 1
    }
  }
};
