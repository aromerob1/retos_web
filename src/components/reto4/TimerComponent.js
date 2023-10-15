import React, { useState, useEffect } from "react";

function TimerComponent() {
    const [tiempo, setTiempo] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
  
    useEffect(() => {
      let intervalId;
  
      if (isRunning) {
        intervalId = setInterval(() => {
          setTiempo((prevTime) => prevTime + 1);
        }, 1000);
      }
  
      return () => clearInterval(intervalId);
    }, [isRunning]);
  
    const startHandler = () => {
      setIsRunning(true);
    };
  
    const pauseHandler = () => {
      setIsRunning(false);
    };
  
    const restartHandler = () => {
      setTiempo(0);
    };
    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor((timeInSeconds % 3600) / 60).toString().padStart(2, '0');
        const seconds = (timeInSeconds % 60).toString().padStart(2, '0');
        return `${minutes} minutos ${seconds} segundos`;
      };
  return (
    <div style={{ maxWidth: '400px', margin: 'auto', marginTop: '50px' }}>
      <h3>Timer</h3>
      <div>
        <div> {formatTime(tiempo)}</div>
            <div>
                <button onClick={startHandler}  style={{ marginRight: '10px', backgroundColor:"green"}}>Start</button>
                <button onClick={pauseHandler}  style={{ marginRight: '10px', backgroundColor:"red" }}> Pause </button>
                <button onClick={restartHandler}  style={{backgroundColor:"yellow" }}> Restart </button>
            </div>
      </div>
    </div>
  );
}

export default TimerComponent;