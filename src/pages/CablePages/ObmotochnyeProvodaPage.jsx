import React from "react";
import cardData from '../../components/Shared/jsons/obmotochnye-provoda/obmotochnye-provoda.json';
import filterCardData from '../../components/Shared/jsons/obmotochnye-provoda/obmotochnye-provoda-filter.json'
import CablePage from "../../components/CablePage/CablePage";
import image from '../../photos/products/обмоточные-провода.png'
function ObmotochnyeProvodaPage() {
    return (
        <CablePage cardData={cardData} filterCardData={filterCardData} cardImage={image} pageTitle={'Провода обмоточные'}/>
    );
}

export default ObmotochnyeProvodaPage;