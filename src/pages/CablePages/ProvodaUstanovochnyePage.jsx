import React from "react";
import cardData from '../../components/Shared/jsons/provoda-ustanovochnye/provoda-ustanovochnye.json';
import CablePage from "../../components/CablePage/CablePage";
import image from '../../photos/products/провода-установочные.png'
function ProvodaUstanovochnyePage() {
    return (
        <CablePage
            cardData={cardData}
            filterCardData={{}}
            cardImage={image}
            pageTitle={'Провода установочные (монтажные)'}
        />
    );
}

export default ProvodaUstanovochnyePage;