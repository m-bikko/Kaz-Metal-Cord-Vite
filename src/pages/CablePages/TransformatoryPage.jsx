import React from "react";
import cardData from '../../components/Shared/jsons/transformatory/transformatory.json';
import CablePage from "../../components/CablePage/CablePage";
import image from '../../photos/products/трансформаторы.png'
function TransformatoryPage() {
    return (
        <CablePage
            cardData={cardData}
            filterCardData={{}}
            cardImage={image}
            pageTitle={'Трансформаторы'}
        />
    );
}

export default TransformatoryPage;