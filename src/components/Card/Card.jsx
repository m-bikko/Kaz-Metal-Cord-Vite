import React, {useState} from "react";
import './Card.css'
import Clicker from "../Clicker/Clicker.jsx";
import Popup from "../Popup/Popup";

const Card = ({ productId, image, name, description, price }) => {
    const [countQuantity, setCountQuantity] = useState(1)
    const [isOpen, setIsOpen] = useState(false)

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
        setIsOpen(true)
    };


    return (
        <div className={`card`}>
            <img src={image} alt={`product`} />
            <div className={`card-content`}>
                <p className={`description`}>{name}</p>
                <p className={`hint`}>В связи с высокой волатильностью отпускных цен, актуальную стоимость уточняйте у менеджера</p>
                <p className={`price`}>от {price} тг.</p>
                <div className={`button-container`}>
                    <Clicker setCountQuantity={handleSetCountQuantity}/>
                    <button className={`buy`} onClick={handleBuyClick}>
                        Купить
                    </button>
                </div>
            </div>
            <Popup isOpen={isOpen} setIsOpen={setIsOpen} isNotFilled={true}>
                <div className={`successPopup`}>
                    <img src={'https://cdn-icons-png.flaticon.com/512/4436/4436481.png'} alt={``}/>
                    <p className={`submitted-text`}>Товар успешно добавлен в корзину!</p>
                </div>
            </Popup>
        </div>
    );
}

export default Card;
