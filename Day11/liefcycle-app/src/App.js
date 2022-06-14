import React, {useEffect, useState} from 'react'
import './App.css';
import Clock from "./components/Clock"
import Counter from './components/Counter'

function App() {
  const[showCounter, setShowCounter] = useState(true);
  
  return (
    <div>
      {/* <Clock></Clock> */}
      {showCounter ? <Counter /> : <></>}
      {/* <Counter></Counter> */}
      <button onClick={() => setShowCounter(!showCounter)}>
        Toggle Show Counter
      </button>
    </div>
    
  );
}

export default App;
