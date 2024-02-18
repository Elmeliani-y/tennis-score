import { createStore } from "redux";
import tennisReducer from "./reducers";

const store = createStore(tennisReducer);

export default store;
