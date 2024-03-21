import React, {useEffect, useState} from "react";
import './CardLoader.css';
import Card from "../Card/Card.jsx";

const CardLoader = ({selectedData, cardData, cardImage}) => {
    const [visibleCards, setVisibleCards] = useState(6);

    const handleLoadMore = () => {
        if(filteredCards.length > visibleCards + 6){
            setVisibleCards(prevVisibleItems => prevVisibleItems + 6);
        }
        else {
            setVisibleCards(prevVisibleItems => prevVisibleItems + (filteredCards.length - prevVisibleItems));
        }
    };

    const dict = {
        "Количество жил":"количество_жил",
        "Марка":"mark",
        "Размер сечения, мм2":"размер_сечения_мм2",
        "diameter_mm":"diameter",
        "grade":"mark",
        "типы":"category"
    }


    const filteredCards = cardData.filter(item => {
        if(selectedData != null){
            for (var key in selectedData) {
                const selectedValue = selectedData[key];
                const itemValue = item[dict[key]];
                if (!selectedValue.includes(itemValue)) {
                    return false;
                }
            }
        }
        return true;
    });


    const canLoadMore = visibleCards < filteredCards.length;

    return (
        <div className={`card-loader`}>
            <div className={`card-container`}>
                {filteredCards.slice(0, visibleCards).map((item, idx) => (
                    <Card key={idx} image={cardImage} name={item.name} description={item.category} price={item.price} productId={idx} />
                ))}
            </div>
            {
                canLoadMore && (
                    <div className={`download-button`}>
                        <button onClick={handleLoadMore}>Загрузить еще</button>
                    </div>
                )}
        </div>
    );
}

export default CardLoader;
