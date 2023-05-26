import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0)

  const increment = () => {
    setCounter(currentVal => currentVal + 1)
  }

  const decrement = () => {
    if (counter>0){
      setCounter(currentVal=> currentVal - 1)
    }
  }

  setTimeout(() =>{
    setCounter(1000)
  },2000)
  
  return (
    <div>
      <h1>Count: {counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick= {decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
