// src/redux/actions.js
export const SET_SCORE = "SET_SCORE";
export const RESET_SCORE = "RESET_SCORE";
export const PAUSE_GAME = "PAUSE_GAME";

export const setScore = (player, score) => ({
  type: SET_SCORE,
  payload: { player, score },
});

export const resetScore = () => ({
  type: RESET_SCORE,
});

export const pauseGame = () => ({
  type: PAUSE_GAME,
});
