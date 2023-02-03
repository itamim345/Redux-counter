import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increaseByVal, increment, reset } from './counterSlice';

export default function CounterView() {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
  return (
    <div>
      <h2>Counter Value: {count}</h2>
      <button onClick={()=> dispatch(increment())}>Increase</button>
      <button onClick={() => dispatch(decrement())}>Decrease</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(increaseByVal(3))}>IncreaseByVal</button>
    </div>
  );
}
