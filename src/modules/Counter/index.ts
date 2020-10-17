import { ActionType, createReducer } from "typesafe-actions";
import { CounterState } from "../../interface/counter";

//increase
const INCREASE = "counter/INCREASE" as const;
const DECREASE = "counter/DECREASE" as const;

export function onIncrease() {
  return {
    type: INCREASE,
  };
}

export function onDecrease() {
  return {
    type: DECREASE,
  };
}

const actions = {
  onIncrease,
  onDecrease,
};

type CounterAction = ActionType<typeof actions>;

const initialState: CounterState = {
  count: 0,
};

const counter = createReducer<CounterState, CounterAction>(initialState, {
  [INCREASE]: (state) => ({
    count: state.count + 1,
  }),
  [DECREASE]: (state) => ({
    count: state.count - 1,
  }),
});

export default counter;
