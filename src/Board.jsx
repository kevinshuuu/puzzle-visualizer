import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import calcRook from './calcUtils/calcRook';
import calcBishop from './calcUtils/calcBishop';
import calcPawn from './calcUtils/calcPawn';

const Square = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  position: relative;

  ${props => props.dark ? css`
    background: #4d79ff
  ` : css`
    background: #e6ecff
  `}
`
const Row = styled.div`
  display: flex
`;

const Piece = styled.img`
  width: 75%;
  height: 75%;
  margin: auto;
`;

const Pressures = styled.div`
  top: 0;
  position: absolute;

  ${props => props.attacking ? css`
    left: 0;
  ` : css`
    right: 0;
  `}
`;

const Board = () => {
  const pressures = {
    white: [
      [ [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], ],
      [ [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], ],
      [ [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], ],
      [ [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], ],
      [ [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], ],
      [ [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], ],
      [ [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], ],
      [ [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], ],
    ],
    black: [
      [ [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], ],
      [ [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], ],
      [ [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], ],
      [ [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], ],
      [ [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], ],
      [ [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], ],
      [ [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], ],
      [ [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], ],
    ],
  };

  const [board] = useState([
    [0, 0, 0, 0, -4, -4, -6, -3],
    [0, -1, 0, 0, 0, -1, 0, 0],
    [0, 0, 0, -1, 0, 1, -1, 0],
    [0, 0, 0, 0, 0, 0, 0, 5],
    [0, 0, 0, -5, 1, 0, 0, 0],
    [0, -1, 0, 0, 0, 0, 4, 0],
    [1, 1, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 6]
  ]);

  board.forEach((row, r_idx) =>
    row.forEach((cell, c_idx) => {
      if (cell === 4 || cell === -4) {
        calcRook(board, pressures, r_idx, c_idx, cell < 0);
      } else if (cell === 3 || cell === -3) {
        calcBishop(board, pressures, r_idx, c_idx, cell < 0);
      } else if (cell === 5 || cell === -5) {
        calcRook(board, pressures, r_idx, c_idx, cell < 0);
        calcBishop(board, pressures, r_idx, c_idx, cell < 0);
      } else if (cell === 1 || cell === -1) {
        calcPawn(board, pressures, r_idx, c_idx, cell < 0);
      }
    }
  ));

  return board.map((row, r_idx) => (
    <Row key={r_idx}>
      {row.map((cell, c_idx) => (
        <Square key={c_idx} dark={(c_idx + r_idx) % 2 === 0}>
          <Pressures attacking>
            {cell !== 0 && "B".repeat(pressures["black"][r_idx][c_idx][0])}
            {cell !== 0 && "W".repeat(pressures["white"][r_idx][c_idx][0])}
          </Pressures>
          <Pressures>
            {cell !== 0 && "b".repeat(pressures["black"][r_idx][c_idx][1])}
            {cell !== 0 && "w".repeat(pressures["white"][r_idx][c_idx][1])}
          </Pressures>
          {cell !== 0 && <Piece src={`./pieces/${cell}.svg`} />}
        </Square>
      ))}
    </Row>
  ));
};

export default Board;