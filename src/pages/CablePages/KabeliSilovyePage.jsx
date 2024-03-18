import React from "react";
import cardData from '../../components/Shared/jsons/kabeli-silovye/kabeli-silovye.json';
import filterCardData from '../../components/Shared/jsons/kabeli-silovye/kabeli-silovye-filter.json'
import CablePage from "../../components/CablePage/CablePage";
import image from '../../photos/products/кабели-силовые.png'
function KabeliSilovyePage() {
    return (
        <CablePage cardData={cardData} filterCardData={filterCardData} cardImage={image}/>
    );
}

export default KabeliSilovyePage;