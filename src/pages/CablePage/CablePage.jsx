import React, {useState, useEffect} from "react";
import './CablePage.css'
import {Link} from "react-router-dom";
import CableHints from "../../components/CableHints/CableHints.jsx";
import Filter from "../../components/Filter/Filter.jsx";
import CardLoader from "../../components/CardLoader/CardLoader.jsx";
import Specification from "../../components/Specification/Specification.jsx";
import NotFound from "../../components/NotFound/NotFound.jsx";
import basket from "../../components/Shared/image/Basket.png"
import Popup from "../../components/Popup/Popup.jsx";
import Card from "../../components/Card/Card.jsx";
import Clicker from "../../components/Clicker/Clicker.jsx";
import remove from '../../components/Shared/image/remove.png'

function CablePage() {

    const [isPopupOpen, setPopupOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        // Загрузка данных из localStorage при монтировании компонента
        const storedCardData = JSON.parse(localStorage.getItem('storedCard')) || [];
        setCartItems(storedCardData);
    }, []);

    const handleRemoveCard = (index) => {
        const updatedCartItems = [...cartItems];
        updatedCartItems.splice(index, 1);
        setCartItems(updatedCartItems);
        localStorage.setItem('storedCard', JSON.stringify(updatedCartItems));
    };

    const handlePopupOpen = () => {
        const storedCardData = JSON.parse(localStorage.getItem('storedCard')) || [];
        setCartItems(storedCardData);
        setPopupOpen(true);
    };

    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };


    return (
        <div className={`cable`} >
            <div className={isPopupOpen ? `basket-container active` : `basket-container`}>
                <button onClick={() => handlePopupOpen()}><img src={basket} alt={``}/></button>
            </div>
            <CableHints/>
            <div className={`filter-text`}>
                <h2>Фильтры</h2>
            </div>
            <div className={`filter-cards`}>
                <Filter/>
                <CardLoader/>
            </div>
            <Specification/>
            <NotFound useBasketStyles={false}/>
            <Popup isOpen={isPopupOpen} setIsOpen={setPopupOpen}>
                <h2>Ваш заказ:</h2>
                <div className={`basket-card-container`} >
                    {cartItems.map((item, idx) => (
                        <div className={`basket-card`} key={idx}>
                            <img src={item.image}/>
                            <div className={`basket-card-detail`}>
                                <p className={`basket-card-description`}>{item.description}</p>
                                <div className={`basket-card-price`}>
                                    <Clicker useCablePageStyles={true} quantity={item.quantity}/>
                                    <p>{item.price} тг.</p>
                                </div>
                            </div>
                            <button className={`remove-card`} onClick={() => handleRemoveCard(idx)}>
                                <img src={remove} alt={`Кнопка удаление товара из корзины`}/>
                            </button>
                        </div>
                    ))}
                </div>
                <div>
                    <p className={`basket-total`}>Total: {calculateTotalPrice()} тг.</p>
                </div>
                <NotFound useBasketStyles={true}/>
            </Popup>
        </div>
    )
}

export default CablePage;
