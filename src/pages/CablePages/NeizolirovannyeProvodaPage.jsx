import React from "react";
import cardData from '../../components/Shared/jsons/neizolirovannye-provoda/neizolirovannye-provoda.json';
import CablePage from "../../components/CablePage/CablePage";
import image from '../../photos/products/неизолированные-провода.png'
function NeizolirovannyeProvodaPage() {
    return (
        <CablePage
            cardData={cardData}
            filterCardData={{}}
            cardImage={image}
            pageTitle={'Неизолированные провода'}
        />
    );
}

export default NeizolirovannyeProvodaPage;