
import { SET_SCORE, RESET_SCORE, PAUSE_GAME } from "./actions";

const initialState = {
  player1: 0,
  player2: 0,
  paused: false,
};

const tennisReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SCORE:
      return {
        ...state,
        [action.payload.player]: action.payload.score,
      };
    case RESET_SCORE:
      return {
        ...initialState,
        paused: state.paused,
      };
    case PAUSE_GAME:
      return {
        ...state,
        paused: !state.paused,
      };
    default:
      return state;
  }
};

export default tennisReducer;
