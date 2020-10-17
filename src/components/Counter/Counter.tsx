import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../modules/index";
import { onIncrease, onDecrease } from "../../modules/Counter/index";

import { CounterWrapper } from "./Counter.element";

import { MAX_COUNT, MIN_COUNT } from "../../constants/counter";

function Counter() {
  const dispatch = useDispatch();
  const { count } = useSelector((state: RootState) => state.counter);

  const isMin = count === MIN_COUNT;
  const isMax = count === MAX_COUNT;

  function handleOnIncrease() {
    if (count === MAX_COUNT) return;
    dispatch(onIncrease());
  }

  function handleOnDecrease() {
    if (count === MIN_COUNT) return;
    dispatch(onDecrease());
  }

  return (
    <CounterWrapper isMax={isMax} isMin={isMin}>
      <button
        className="increase-btn"
        onClick={handleOnDecrease}
        disabled={isMin}
      >
        -
      </button>
      <p className="count">{count}</p>
      <button
        className="decrease-btn"
        onClick={handleOnIncrease}
        disabled={isMax}
      >
        +
      </button>
    </CounterWrapper>
  );
}

export default Counter;
