import React, { useState } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

function ProgressBarReto2() {
    const [now, setNow] = useState(0);

    const handleChange = (e) => {
        let value = e.target.value;
        setNow(value);
        
    };

    return (
        <div>
            <h4>Progress Bar</h4>
            <ProgressBar now={now} label={`${now}%`} />
            <h6>Input percentage: 
                <input 
                    type="number" 
                    value={now} 
                    onChange={handleChange} 
                    min="0" 
                    max="100" 
                />
            </h6>
        </div>
    );
}

export default ProgressBarReto2;
