import React from "react";
import cardData from '../../components/Shared/jsons/provoda-bortovye-aviacionnye/provoda-bortovye-aviacionnye.json';
import CablePage from "../../components/CablePage/CablePage";
import image from '../../photos/products/провода-бортовые-авиационные.png'
function ProvodaBortovyeAviacionnyePage() {
    return (
        <CablePage
            cardData={cardData}
            filterCardData={{}}
            cardImage={image}
            pageTitle={'Провода бортовые авиационные'}
        />
    );
}

export default ProvodaBortovyeAviacionnyePage;
