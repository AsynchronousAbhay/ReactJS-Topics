import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "./store/slice/counterSlice";

function App() {
  const { value } = useSelector((state) => state.counterReducer);
  // console.log(sd);

  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(increment());
  }

  const decrementHandler = () => {
    dispatch(decrement());
  }

  const incrementByActionHandler = () => {
    dispatch(incrementByAmount(12));
  }


  return (
    <div className="contianer">
      <h1>{value}</h1>
      <button className="btn btn-primary" onClick={incrementHandler}>Increment by 1</button>
      <button className="btn btn-danger" onClick={decrementHandler}>Decrement by 1</button>
      <button className="btn btn-success" onClick={incrementByActionHandler}>IncrementByAction by 1</button>
    </div>
  );
}

export default App;
