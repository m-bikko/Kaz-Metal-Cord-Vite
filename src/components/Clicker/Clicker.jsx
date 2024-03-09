import React, {useState} from "react";
import './Clicker.css';

const Clicker = ({quantity = 1, setCountQuantity, useCablePageStyles}) => {
    const [count, setCount] = useState(quantity);

    const handleIncrement = () => {
        setCount(count + 1);
        setCountQuantity(count + 1)
    };

    const handleDecrement = () => {
        if(count > 1) {
            setCount(count - 1);
            setCountQuantity(count - 1)
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