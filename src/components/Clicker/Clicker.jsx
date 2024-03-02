import React, {useState} from "react";
import './Clicker.css';

function Clicker() {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        if(count > 0) {
            setCount(count - 1);
        }
    };


    return (
        <div className={`clicker`}>
            <button onClick={handleDecrement}>-</button>
            <p>{count}</p>
            <button onClick={handleIncrement}>+</button>
        </div>
    );
}

export default Clicker;