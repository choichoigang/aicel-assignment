import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../modules/index";
import { onIncrease, onDecrease } from "../../modules/Counter/index";

import { CounterWrapper } from "./Counter.element";

import { MAX_COUNT, MIN_COUNT } from "../../constants/counter";

function Counter() {
  const dispatch = useDispatch();
  const { count } = useSelector((state: RootState) => state.counter);

  const [btnAvailed, setBtnAvailed] = useState(true);

  const isMin = count === MIN_COUNT;
  const isMax = count === MAX_COUNT;

  function handleOnIncrease() {
    if (!btnAvailed) return;
    if (count === MAX_COUNT) return;

    setBtnAvailed(false);
    dispatch(onIncrease());

    setTimeout(() => {
      setBtnAvailed(true);
    }, 1000);
  }

  function handleOnDecrease() {
    if (!btnAvailed) return;
    if (count === MIN_COUNT) return;

    setBtnAvailed(false);
    dispatch(onDecrease());

    setTimeout(() => {
      setBtnAvailed(true);
    }, 1000);
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
