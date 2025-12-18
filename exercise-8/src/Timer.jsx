
import { useState, useEffect } from "react";

function Timer() {
    const[timeLeft, setTimeLeft] = useState(25);
    const[isActive, setIsActive] = useState(false);
    const [inputTime, setInputTime] = useState(25);


    useEffect(() => {
        let interval;
        if(isActive && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft(prev => prev - 1);
            }, 1000);
        }else if(!isActive) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, timeLeft]);



    const handleStart = () => {
    if (timeLeft > 0) {
    setIsActive(true);
    }
    }

    const handleStop = () => {
        setIsActive(false);
    }
    const handleReset = () => {
        setIsActive(false);
        setTimeLeft(inputTime);
    }
    const handleInputChange = (e) => {
        const value = Number(e.target.value);
        setInputTime(value);
        setTimeLeft(value);
    }

    return (
        <div>
            <h1>CountDown timer</h1>
             <label>Set Time (seconds): </label>
            <input 
                type="number" 
                value={inputTime} 
                onChange={handleInputChange} 
            />
            <p>Time left: {timeLeft} Seconds </p>
            <button disabled={!timeLeft || isActive} onClick={handleStart}>Start</button>
            <button disabled={!isActive} onClick={handleStop}>Stop</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
}
export default Timer;