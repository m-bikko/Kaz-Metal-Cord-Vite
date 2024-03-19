import React from "react";
import cardData from '../../components/Shared/jsons/kabelnye-mufty-i-nakonechniki/kabelnye-mufty-i-nakonechniki.json';
import filterCardData from '../../components/Shared/jsons/kabelnye-mufty-i-nakonechniki/kabelnye-mufty-i-nakonechniki-filter.json'
import CablePage from "../../components/CablePage/CablePage";
import image from '../../photos/products/кабельные-муфты-и-наконечники.png'
function KabelnyeMuftyNakonechnikiPage() {
    return (
        <CablePage cardData={cardData} filterCardData={filterCardData} cardImage={image} pageTitle={'Кабельные муфты и наконечники'}/>
    );
}

export default KabelnyeMuftyNakonechnikiPage;