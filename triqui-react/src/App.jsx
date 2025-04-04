import { useState } from "react";

const TURN = {
  X: "X",
  O: "O",
};

const Scuare = ({ children, isSelect, updateBoard }) => {
  const className = `square ${isSelect ? "is-selected" : ""}`;

  const handleClick = () => {
    updateBoard();
  };

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  );
};

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));

  const [turn, setTurn] = useState(TURN.X);

  const updateBoard = (index) => {
    const newTurn = turn === TURN.X ? TURN.O : TURN.X;
    const newBoard = [...board];
    newBoard[index] = turn;
    setTurn(newTurn);
  };

  return (
    <main className="board">
      <h1>Triki</h1>
      <section className="game">
        {board.map((_, index) => (
          <Scuare key={index} index={index} updateBoard={updateBoard}>
            {index}
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
