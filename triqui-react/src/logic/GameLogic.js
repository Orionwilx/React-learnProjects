import { useState, useCallback } from "react";
import confetti from "canvas-confetti";
import { TURN } from "../Constans";
import { checkWinner, checkEndGame } from "./board";
import { saveGameStorage, resetgameStorage } from "./Storage/Storage";

export function GameLogic(){
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

  const updateBoard = useCallback(
    (index) => {
      if (board[index] || winner) return;

      const newBoard = [...board];
      newBoard[index] = turn;
      setBoard(newBoard);

      const newTurn = turn === TURN.X ? TURN.O : TURN.X;
      setTurn(newTurn);

      saveGameStorage({
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
    },
    [board, turn, winner]
  );

  return {
    board,
    turn,
    winner,
    resetGame,
    updateBoard,
  };
}