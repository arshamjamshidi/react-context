import {
  DECREMENT_COUNTER,
  DECREMENT_COUNTER_BY_AMOUNT,
  INCREMENT_COUNTER,
  INCREMENT_COUNTER_BY_AMOUNT,
} from "./actionTypes";

export const incrementCounter = () => ({
  type: INCREMENT_COUNTER,
});

export const decrementCounter = () => ({
  type: DECREMENT_COUNTER,
});

export const incrementCounterByAmount = (amount = 1) => ({
  type: INCREMENT_COUNTER_BY_AMOUNT,
  payload: amount,
});

export const decrementCounterByAmount = (amount = 1) => ({
  type: DECREMENT_COUNTER_BY_AMOUNT,
  payload: amount,
});
