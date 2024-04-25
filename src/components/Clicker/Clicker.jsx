import React, {useEffect, useState} from "react";
import './Clicker.css';

const Clicker = ({ quantity = 1, setCountQuantity, useCablePageStyles }) => {
    const [count, setCount] = useState(quantity);

    useEffect(() => {
        setCount(quantity);
    }, [quantity]);


    const handleIncrement = () => {
        const newCount = count + 1;
        setCount(newCount);
        setCountQuantity(newCount);
    };

    const handleDecrement = () => {
        if (count > 1) {
            const newCount = count - 1;
            setCount(newCount);
            setCountQuantity(newCount);
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
