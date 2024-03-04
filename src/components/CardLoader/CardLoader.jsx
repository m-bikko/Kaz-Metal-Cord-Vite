import React, { useState } from "react";
import './CardLoader.css';
import Card from "../Card/Card.jsx";
import cable from '../Shared/image/cable.png';
import cardData from '../Shared/kabeli-silovye.json';

function CardLoader() {
    const [visibleItems, setVisibleItems] = useState(6);

    const handleLoadMore = () => {
        setVisibleItems(prevVisibleItems => prevVisibleItems + 6);
    };

    return (
        <div className={`card-loader`}>
            <div className={`card-container`}>
                {cardData.slice(0, visibleItems).map((item, idx) => (
                    <Card key={idx} image={cable} description={item.category} price={item.price} productId={1} />
                ))}
            </div>
            <div className={`download-button`}>
                <button onClick={handleLoadMore}>Загрузить еще</button>
            </div>
        </div>
    );
}

export default CardLoader;
