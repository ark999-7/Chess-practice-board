import { useState } from "react";
import Chessboard from "chessboardjsx";
import { Chess } from "chess.js";

export default function ChessPracticeBoard() {
  const [game, setGame] = useState(new Chess());
  const [fen, setFen] = useState("start");

  const onDrop = ({ sourceSquare, targetSquare }) => {
    const gameCopy = new Chess(game.fen());
    const move = gameCopy.move({ from: sourceSquare, to: targetSquare, promotion: "q" });
    if (move === null) return;
    setGame(gameCopy);
    setFen(gameCopy.fen());
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-xl font-bold mb-4">Chess Practice with ChatGPT</h1>
      <Chessboard
        width={400}
        position={fen}
        onDrop={onDrop}
        boardStyle={{
          borderRadius: "5px",
          boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)"
        }}
      />
      <p className="mt-4">You can ask ChatGPT about your move, strategy, or rules here in chat!</p>
    </div>
  );
}