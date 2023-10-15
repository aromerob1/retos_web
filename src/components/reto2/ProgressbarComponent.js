import ProgressBar from "react-bootstrap/ProgressBar";
import React, { useState } from 'react';

function ProgressbarComponent() {
const [inputValue, setInputValue] = useState(10);
  const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setInputValue(value);
  };
  
  return (
    <div>
      <h1>ProgressBar</h1>
      <ProgressBar now={inputValue} label={`${inputValue}%`} />
      <div style={{display: 'flex', alignItems:"center", justifyContent:"center"}}>
        <div style={{margin: "10px"}}>Input Percentage:</div>
        <input
        type="number"
        value={inputValue}
        onChange={handleInputChange}
        min={0}
        max={100}
        style={{borderRadius: '30px',display: 'flex', justifyContent: 'center'}}
      />
      </div>
    </div>
  );
}

export default ProgressbarComponent;
