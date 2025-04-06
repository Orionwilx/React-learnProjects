import { GameLogic } from "./logic/GameLogic";
import { Square } from "./components/Square";
import { TURN } from "./Constans";
import { WinnerModal } from "./components/WinnerModal";
function App() {
  const { board, turn, winner, resetGame, updateBoard } = GameLogic();

  return (
    <main className="board">
      <h1>Triki</h1>
      <button onClick={resetGame}>Reset el Juego</button>
      <section className="game">
        {board.map((square, index) => (
          <Square key={index} index={index} updateBoard={updateBoard}>
            {square}
          </Square>
        ))}
      </section>

      <section className="turn">
        <Square isSelect={turn === TURN.X}>{TURN.X}</Square>
        <Square isSelect={turn === TURN.O}>{TURN.O}</Square>
      </section>

      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  );
}

export default App;
