import React from "react";
import cardData from '../../components/Shared/jsons/soedinitelnye-provoda/soedinitelnye-provoda.json';
import filterCardData from '../../components/Shared/jsons/soedinitelnye-provoda/soedinitelnye-provoda-filter.json'
import CablePage from "../../components/CablePage/CablePage";
import image from '../../photos/products/соединительные-провода.png'
function SoedinitelnyeProvodaPage() {
    return (
        <CablePage cardData={cardData} filterCardData={filterCardData} cardImage={image} pageTitle={'Соединительные провода'}/>
    );
}

export default SoedinitelnyeProvodaPage;