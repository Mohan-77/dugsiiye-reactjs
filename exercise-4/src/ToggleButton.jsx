import { useState } from "react";

function ToggleButton () {
    const [btn, setBtn] = useState(true)
    const handleClick = () => {
        setBtn(!btn)
    }
return(
    <>
    <p>The button is {btn ? "ON" : "OFF"} </p>
    <button onClick={handleClick}> Turn {btn ? 'OFF' : 'ON'}</button>
    </>
)
}

export  default ToggleButton;