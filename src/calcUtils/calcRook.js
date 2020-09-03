export default (board, pressures, r_idx, c_idx, black) => {
  for (let i = r_idx + 1; i < 8; i++) {
    const pieceOnSquare = board[i][c_idx];
    const whitePressureSquare = pressures['white'][i][c_idx];
    const blackPressureSquare = pressures['black'][i][c_idx];

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
    const pieceOnSquare = board[i][c_idx];
    const whitePressureSquare = pressures['white'][i][c_idx];
    const blackPressureSquare = pressures['black'][i][c_idx];

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

  for (let i = c_idx + 1; i < 8; i++) {
    const pieceOnSquare = board[r_idx][i];
    const whitePressureSquare = pressures['white'][r_idx][i];
    const blackPressureSquare = pressures['black'][r_idx][i];

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

  for (let i = c_idx - 1; i >= 0; i--) {
    const pieceOnSquare = board[r_idx][i];
    const whitePressureSquare = pressures['white'][r_idx][i];
    const blackPressureSquare = pressures['black'][r_idx][i];

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
