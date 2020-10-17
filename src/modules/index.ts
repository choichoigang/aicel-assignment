import { combineReducers } from "redux";
import todo from "./Todo/index";
import counter from "./Counter/index";

const rootReducer = combineReducers({
  todo,
  counter,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
