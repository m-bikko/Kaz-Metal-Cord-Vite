import React from "react";
import cardData from '../../../../Kaz-Metal-Cord-Vite/src/components/Shared/jsons/soedinitelnye-provoda/soedinitelnye-provoda.json';
import filterCardData from '../../../../Kaz-Metal-Cord-Vite/src/components/Shared/jsons/soedinitelnye-provoda/soedinitelnye-provoda-filter.json'
import CablePage from "../../components/CablePage/CablePage";
import image from '../../photos/products/соединительные-провода.png'
function SoedinitelnyeProvodaPage() {
    return (
        <CablePage cardData={cardData} filterCardData={filterCardData} cardImage={image}/>
    );
}

export default SoedinitelnyeProvodaPage;