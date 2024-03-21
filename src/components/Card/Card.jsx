import React, {useState} from "react";
import './Card.css'
import Clicker from "../Clicker/Clicker.jsx";

const Card = ({ productId, image, name, description, price }) => {
    const [countQuantity, setCountQuantity] = useState(1)
    const handleSetCountQuantity = (num) => {
        setCountQuantity(num)
    }
    const handleBuyClick = () => {
        const storedData = JSON.parse(localStorage.getItem('storedCard')) || [];

        const existingCardIndex = storedData.findIndex(item => item.name === name);

        if (existingCardIndex !== -1) {
            storedData[existingCardIndex].quantity += countQuantity;
        }
        else {
            storedData.push({
                productId,
                image,
                name,
                description,
                price,
                quantity: countQuantity,
            });
        }

        localStorage.setItem('storedCard', JSON.stringify(storedData));
    };

    return (
        <div className={`card`}>
            <img src={image} alt={`product`} />
            <div className={`card-content`}>
                <p className={`description`}>{name}</p>
                <p className={`price`}>от {price} тг.</p>
                <button className={`detail`}>Подробнее</button>
                <div className={`button-container`}>
                    <Clicker setCountQuantity={handleSetCountQuantity}/>
                    <button className={`buy`} onClick={handleBuyClick}>
                        Купить
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Card;
