import React from "react";
import cardData from '../../components/Shared/jsons/kabeli-peredachi-dannyh/kabeli-peredachi-dannyh.json';
import CablePage from "../../components/CablePage/CablePage";
import image from '../../photos/products/кабели-передачи-данных.png'
function KabeliPeredachiDannyhPage() {
    return (
        <CablePage
            cardData={cardData}
            filterCardData={{}}
            cardImage={image}
            pageTitle={'Кабели передачи данных'}
        />
    );
}

export default KabeliPeredachiDannyhPage;
