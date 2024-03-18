import React, { useState, useEffect } from "react";
import './CablePage.css';
import CableHints from "../CableHints/CableHints.jsx";
import Filter from "../Filter/Filter.jsx";
import CardLoader from "../CardLoader/CardLoader.jsx";
import Specification from "../Specification/Specification.jsx";
import NotFound from "../NotFound/NotFound.jsx";
import basket from "../../photos/image/Basket.png";
import Popup from "../Popup/Popup.jsx";
import Clicker from "../Clicker/Clicker.jsx";
import remove from '../../photos/image/remove.png';

const CablePage = ({cardData, filterCardData, cardImage, pageTitle}) => {
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [selectedData, setSelectedData] = useState({});

    useEffect(() => {
        const storedCardData = JSON.parse(localStorage.getItem('storedCard')) || [];
        setCartItems(storedCardData);
    }, []);

    const updateLocalStorage = (newQuantity, index) => {
        const updatedCartItems = [...cartItems];
        updatedCartItems[index].quantity = newQuantity;
        localStorage.setItem('storedCard', JSON.stringify(updatedCartItems));
        setCartItems(updatedCartItems);
    };

    const handleRemoveCard = (index) => {
        const updatedCartItems = [...cartItems];
        updatedCartItems.splice(index, 1);
        localStorage.setItem('storedCard', JSON.stringify(updatedCartItems));
        setCartItems(updatedCartItems);
    };

    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const handlePopupOpen = () => {
        const storedCardData = JSON.parse(localStorage.getItem('storedCard')) || [];
        setCartItems(storedCardData);
        setPopupOpen(true);
    };

    const saveData = (obj) => {
        setSelectedData(obj);
    }

    return (
        <div className="cable">
            <div className={isPopupOpen ? "basket-container active" : "basket-container"}>
                <button onClick={() => handlePopupOpen()}><img src={basket} alt=""/></button>
            </div>
            <CableHints title={pageTitle}/>
            <div className="filter-text">
                <h2>Фильтры</h2>
            </div>
            <div className="filter-cards">
                <Filter saveData={saveData} filterData={filterCardData}/>
                <CardLoader selectedData={selectedData} cardData={cardData} cardImage={cardImage}/>
            </div>
            <Specification/>
            <NotFound useBasketStyles={false}/>
            <Popup isOpen={isPopupOpen} setIsOpen={setPopupOpen}>
                <h2>Ваш заказ:</h2>
                <div className="basket-card-container">
                    {cartItems.map((item, idx) => (
                        <div className="basket-card" key={idx}>
                            <img src={item.image} alt="Card"/>
                            <div className="basket-card-detail">
                                <p className="basket-card-description">{item.name}</p>
                                <div className="basket-card-price">
                                    <Clicker
                                        useCablePageStyles={true}
                                        quantity={item.quantity}
                                        setCountQuantity={(newQuantity) => updateLocalStorage(newQuantity, idx)}
                                        updateLocalStorage={(newQuantity) => updateLocalStorage(newQuantity, idx)}
                                    />
                                    <p>{item.price} тг.</p>
                                </div>
                            </div>
                            <button className="remove-card" onClick={() => handleRemoveCard(idx)}>
                                <img src={remove} alt="Кнопка удаление товара из корзины"/>
                            </button>
                        </div>
                    ))}
                </div>
                <div>
                    <p className="basket-total">Total: {calculateTotalPrice()} тг.</p>
                </div>
                <NotFound useBasketStyles={true}/>
            </Popup>
        </div>
    )
}

export default CablePage;
