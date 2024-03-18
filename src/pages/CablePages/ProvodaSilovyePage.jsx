import React from "react";
import cardData from '../../components/Shared/jsons/provoda-silovye/provoda-silovye.json';
import filterCardData from '../../components/Shared/jsons/provoda-silovye/provoda-silovye-filter.json'
import CablePage from "../../components/CablePage/CablePage";
import image from '../../photos/products/провода-силовые.png'
function ProvodaSilovyePage() {
    return (
        <CablePage cardData={cardData} filterCardData={filterCardData} cardImage={image} pageTitle={'Провода силовые'}/>
    );
}

export default ProvodaSilovyePage;