import React from "react";
import './Card.css'
import cable from "../Shared/image/cable.png";
import Clicker from "../Clicker/Clicker.jsx";

const Card = ({ productId, image, description, price }) => {
    const handleBuyClick = () => {
        const storedData = JSON.parse(localStorage.getItem('cart')) || [];

        const existingCard = storedData.find(item => item.productId === productId);

        if (existingCard) {

            existingCard.quantity += 1;
        } else {
            storedData.push({
                productId,
                image,
                description,
                price,
                quantity: 1,
            });
        }

        // Сохраняем обновленные данные в localStorage
        localStorage.setItem('cart', JSON.stringify(storedData));
    };

    return (
        <div className={`card`}>
            <img src={cable} alt={`product`} />
            <div className={`card-content`}>
                <p className={`description`}>{description}</p>
                <p className={`price`}>от {price} тг.</p>
                <button className={`detail`}>Подробнее</button>
                <div className={`button-container`}>
                    <Clicker />
                    <button className={`buy`} onClick={handleBuyClick}>
                        Купить
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Card;
