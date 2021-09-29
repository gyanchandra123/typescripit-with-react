import React, { useReducer } from "react";

type counteState = {
  count: number;
};

type updateAction = {
    type: 'increment'|'decrement';
    payload: number;
}

type resetAction = {
    type: 'reset'; 
}

type counterAction = updateAction|resetAction;

const initialState = { count: 0 };

function reducer(state: counteState, action: counterAction) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    default:
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      count value : {state.count}
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        increment by 10
      </button>
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        decrement by 10
      </button>

      <button onClick={() => dispatch({ type: "reset"})}>
       reset
      </button>
    </>
  );
};

export default Counter;
