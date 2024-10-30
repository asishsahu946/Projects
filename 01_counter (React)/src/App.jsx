import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount (count + 1)
  }
  const decrement = () => {
    setCount (count - 1)
  }
  const setZero = () => {
    setCount(0)
  }
  return(
    <div className="text-center">
      <h1>Counter</h1>
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={setZero}>Reset</button>
    </div>
  ) 
}

export default App;
