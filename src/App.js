import React, { useState, useEffect } from 'react';
import Chessboard from 'chessboardjsx';
import { dropPiece } from './helpers/engine';

const App = () => {
  const [fen, setFen] = useState(null);
  const [line, setLine] = useState(null);

  useEffect(() => {
    async function fetchPuzzle() {
      const request = await fetch("https://cors-anywhere.herokuapp.com/https://chessblunders.org/api/blunder/get", {
        method: "POST",
        mode: "cors",
        headers: {
          'Content-Type': 'application/json',
          'Accept': '*/*'
        },
        body: JSON.stringify({ type: "rated" }),
      });
      const responseData = await request.json();
      setFen(responseData.data.fenBefore);
      setLine(responseData.data.forcedLine);
      console.log(responseData);
    }

    fetchPuzzle();
  }, []);

  return (
    <div>
      <Chessboard
        position={fen}
        draggable
        onDrop={({ sourceSquare, targetSquare, piece }) => {
          dropPiece({sourceSquare, targetSquare, piece}, fen, setFen);
        }}
      />
      {line && (
        <ol>
          {line.map((move) => (
            <li>{move}</li>
          ))}
        </ol>
      )}
    </div>
  );
}

export default App;
