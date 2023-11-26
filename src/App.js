
import './App.css';
import Card from './Card';
import Header from './Header';
import { useEffect, useState } from 'react';

function App() {

  const [count,setCount]=useState(0)
  const [timerRunning, setTimerRunning] = useState(false);
  

  const startTimer = () => {
    setTimerRunning(true);
  };

  useEffect(() => {
    let intervalId;

    if (timerRunning) {
      intervalId = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [timerRunning]);




  return (
    <div className="App">
    <Header  header="TimerApp" />
      <Card title="component" />
     <p>my count is {count}</p>
     <button onClick={()=>startTimer()}> Increment the timer</button>
    </div>
  );
}

export default App;
