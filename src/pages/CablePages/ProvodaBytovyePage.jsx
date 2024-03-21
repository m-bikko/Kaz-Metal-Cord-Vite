import React from "react";
import cardData from '../../components/Shared/jsons/provoda-bytovye/provoda-bytovye.json';
import CablePage from "../../components/CablePage/CablePage";
import image from '../../photos/products/провода-бытовые.png'
function ProvodaBytovyePage() {
    return (
        <CablePage
            cardData={cardData}
            filterCardData={{}}
            cardImage={image}
            pageTitle={'Провода бытовые'}
        />
    );
}

export default ProvodaBytovyePage;
