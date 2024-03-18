import React from "react";
import cardData from '../../components/Shared/jsons/kabeli-montazhnye/kabeli-montazhnye.json';
import filterCardData from '../../components/Shared/jsons/kabeli-montazhnye/kabeli-montazhnye-filter.json'
import CablePage from "../../components/CablePage/CablePage";
import image from '../../photos/products/кабели-монтажные.png'
function KabeliMontazhnyePage() {
    return (
        <CablePage cardData={cardData} filterCardData={filterCardData} cardImage={image}/>
    );
}

export default KabeliMontazhnyePage;