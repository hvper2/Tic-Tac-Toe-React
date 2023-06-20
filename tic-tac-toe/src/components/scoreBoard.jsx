import React from "react";
import "../styles/ScoreBoard.css";

function ScoreBoard(score, xPlaying) {
  const { xScore, oScore } = score;
  return (
    <div>
      <span className={`score x-score ${!xPlaying && "inactive"}`}>
        X - {xScore}
      </span>
      <span className={`score x-score ${!xPlaying && "inactive"}`}>
        O - {oScore}
      </span>
    </div>
  );
}

export default ScoreBoard;
