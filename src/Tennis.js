// src/Tennis.js
import React from "react";
import { connect } from "react-redux";
import { setScore, resetScore, pauseGame } from "./redux/actions";
import "./Tennis.css";

const Tennis = ({ player1, player2, paused, setScore, resetScore, pauseGame }) => {
  const translateScore = (score) => {
    switch (score) {
      case 0:
        return "0";
      case 1:
        return "15";
      case 2:
        return "30";
      case 3:
        return "40";
      default:
        return "win";
    }
  };

  return (
    <div className="tennis-container">
      <h2>Tennis App</h2>
      <div className="score-container">
        <p className="score-text">{`Le score est : ${translateScore(player1)} - ${translateScore(player2)}`}</p>
        <button className="score-button" onClick={() => setScore("player1", player1 + 1)} disabled={paused}>
          Score Point for Player 1
        </button>
        <button className="score-button" onClick={() => setScore("player2", player2 + 1)} disabled={paused}>
          Score Point for Player 2
        </button>
      </div>
      <div className="button-container">
        <button className="reset-button" onClick={resetScore} disabled={paused}>
          Reset
        </button>
        <button className="pause-button" onClick={pauseGame}>
          {paused ? "Resume" : "Pause"}
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  player1: state.player1,
  player2: state.player2,
  paused: state.paused,
});

const mapDispatchToProps = {
  setScore,
  resetScore,
  pauseGame,
};

export default connect(mapStateToProps, mapDispatchToProps)(Tennis);
W