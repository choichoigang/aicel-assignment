import { combineReducers } from "redux";
import todo from "./Todo/index";
import counter from "./Counter/index";
import grid from "./Grid/index";

const rootReducer = combineReducers({
  todo,
  counter,
  grid,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
