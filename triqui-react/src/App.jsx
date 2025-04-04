import { useState } from "react";

const TURN = {
  X: "X",
  O: "O",
};

const Scuare = ({ children, isSelect, updateBoard, index }) => {
  const className = `square ${isSelect ? "is-selected" : ""}`;

  const handleClick = () => {
    updateBoard(index);
  };

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  );
};

const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));

  const [turn, setTurn] = useState(TURN.X);

  const [winner, setWinner] = useState(null);

  const checkWinner = (boardToCheck) => {
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo;
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a];
      }
    }
    return null;
  };

  const updateBoard = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newTurn = turn === TURN.X ? TURN.O : TURN.X;
    setTurn(newTurn);

    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      alert(`El ganador es ${turn}`);
      setWinner(newWinner);
    }
  };

  return (
    <main className="board">
      <h1>Triki</h1>
      <section className="game">
        {board.map((_, index) => (
          <Scuare key={index} index={index} updateBoard={updateBoard}>
            {board[index]}
          </Scuare>
        ))}
      </section>

      <section className="turn">
        <Scuare isSelect={turn === TURN.X}>{TURN.X}</Scuare>
        <Scuare isSelect={turn === TURN.O}>{TURN.O}</Scuare>
      </section>
    </main>
  );
}

export default App;
