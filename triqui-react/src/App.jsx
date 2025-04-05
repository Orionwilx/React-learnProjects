import { useState } from "react";
import confetti from "canvas-confetti";
import { Scuare } from "./components/Square";
import { TURN } from "./Constans";
import { checkWinner, checkEndGame } from "./logic/board";
import { WinnerModal } from "./components/WinnerModal";
import { saveGameSorage, resetgameStorage } from "./logic/Storage/Storage";

function App() {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem("board");
    return boardFromStorage
      ? JSON.parse(boardFromStorage)
      : Array(9).fill(null);
  });

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem("turn");
    return turnFromStorage ? turnFromStorage : TURN.X;
  });

  const [winner, setWinner] = useState(null);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURN.X);
    setWinner(null);

    resetgameStorage();
  };

  const updateBoard = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newTurn = turn === TURN.X ? TURN.O : TURN.X;
    setTurn(newTurn);

    saveGameSorage({
      board: newBoard,
      turn: newTurn,
    });

    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
      confetti({
        particleCount: 100,
        spread: 90,
        origin: { y: 0.6 },
      });
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  };

  return (
    <main className="board">
      <h1>Triki</h1>
      <button onClick={resetGame}>Reset el Juego</button>
      <section className="game">
        {board.map((square, index) => (
          <Scuare key={index} index={index} updateBoard={updateBoard}>
            {square}
          </Scuare>
        ))}
      </section>

      <section className="turn">
        <Scuare isSelect={turn === TURN.X}>{TURN.X}</Scuare>
        <Scuare isSelect={turn === TURN.O}>{TURN.O}</Scuare>
      </section>

      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  );
}

export default App;
