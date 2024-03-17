// Clicker.jsx

import React, { useState } from "react";
import './Clicker.css';

const Clicker = ({ quantity = 1, setCountQuantity, useCablePageStyles }) => {
    const [count, setCount] = useState(quantity);

    const handleIncrement = () => {
        const newCount = count + 1;
        setCount(newCount);
        setCountQuantity(newCount);
        // updateLocalStorage(newCount);
    };

    const handleDecrement = () => {
        if (count > 1) {
            const newCount = count - 1;
            setCount(newCount);
            setCountQuantity(newCount);
            // updateLocalStorage(newCount);
        }
    };

    const clickerClassName = useCablePageStyles ? 'cable-page-clicker' : 'clicker';

    return (
        <div className={clickerClassName}>
            <button onClick={handleDecrement}>-</button>
            <p>{count}</p>
            <button onClick={handleIncrement}>+</button>
        </div>
    );
}

export default Clicker;
