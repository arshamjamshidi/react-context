import React, { useState } from "react";

import { useCounter } from "../context/counter/reducer";

import {
  incrementCounter,
  decrementCounter,
  incrementCounterByAmount,
  decrementCounterByAmount,
} from "../context/counter/actions";

const Counter = () => {
  const [amount, setAmount] = useState(0);
  const {
    counter: { counter },
    counterDispatch,
  } = useCounter();

  return (
    <div>
      <h1>
        Counter is <span style={{ color: "red" }}>{counter}</span>
      </h1>

      <div>
        <h3>By Default</h3>
        <button onClick={() => counterDispatch(incrementCounter())}>
          increment
        </button>
        <button onClick={() => counterDispatch(decrementCounter())}>
          decrement
        </button>
      </div>

      <div>
        <h3>By Amount</h3>
        <div>
          <input
            type="number"
            value={amount}
            onChange={({ target }) => setAmount(target.value)}
          />
        </div>
        <button
          onClick={() => counterDispatch(incrementCounterByAmount(amount))}
        >
          increment
        </button>
        <button
          onClick={() => counterDispatch(decrementCounterByAmount(amount))}
        >
          decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
