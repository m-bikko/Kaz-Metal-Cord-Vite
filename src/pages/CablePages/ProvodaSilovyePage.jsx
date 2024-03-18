import React from "react";
import cardData from '../../../../Kaz-Metal-Cord-Vite/src/components/Shared/jsons/provoda-silovye/provoda-silovye.json';
import filterCardData from '../../../../Kaz-Metal-Cord-Vite/src/components/Shared/jsons/provoda-silovye/provoda-silovye-filter.json'
import CablePage from "../../components/CablePage/CablePage";
import image from '../../photos/products/провода-силовые.png'
function ProvodaSilovyePage() {
    return (
        <CablePage cardData={cardData} filterCardData={filterCardData} cardImage={image}/>
    );
}

export default ProvodaSilovyePage;