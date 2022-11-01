import React, { useState } from "react";
import "./App.css";

const App = () => {
  let [counter, setCounter] = useState(0);
  const increment = () => {
    counter < 10 ? setCounter(counter + 1) : setCounter(0);
  };
  const decremtn = () => {
    // if (counter !== 0) {
    //   setCounter(counter - 1);
    // } else {
    //   setCounter(0);
    // }
    counter !== 0 ? setCounter(counter - 1) : setCounter(0);
  };
  return (
    <div className="App">
      <header>
        <h1>Counter App using State</h1>
      </header>
      <h2>Current value of count is {counter.valueOf()}</h2>
      <button onClick={() => setCounter(0)}>Reset Counter</button>
      <button onClick={() => increment()}>Increse Counter</button>
      <button onClick={() => decremtn()}> Decrese Counter</button>
    </div>
  );
};

export default App;
