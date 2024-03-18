import React from "react";
import cardData from '../../components/Shared/jsons/kabeli-kontrolnie/kabeli-kontrolnie.json';
import filterCardData from '../../components/Shared/jsons/kabeli-kontrolnie/kabeli-kontrolnie-filter.json'
import CablePage from "../../components/CablePage/CablePage";
import image from '../../photos/products/кабели-контрольные.png'
function KabeliKontrolniePage() {
    return (
        <CablePage cardData={cardData} filterCardData={filterCardData} cardImage={image}/>
    );
}

export default KabeliKontrolniePage;