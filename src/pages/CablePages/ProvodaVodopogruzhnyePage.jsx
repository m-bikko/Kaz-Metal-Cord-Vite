import React from "react";
import cardData from '../../components/Shared/jsons/provoda-vodopogruzhnye/provoda-vodopogruzhnye.json';
import CablePage from "../../components/CablePage/CablePage";
import image from '../../photos/products/провода-водопогружные.png'
function ProvodaVodopogruzhnyePage() {
    return (
        <CablePage
            cardData={cardData}
            filterCardData={{}}
            cardImage={image}
            pageTitle={'Провода водопогружные'}
        />
    );
}

export default ProvodaVodopogruzhnyePage;