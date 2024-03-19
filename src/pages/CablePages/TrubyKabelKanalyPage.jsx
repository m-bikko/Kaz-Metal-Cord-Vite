import React from "react";
import cardData from '../../components/Shared/jsons/truby-kabel-kanaly/truby-kabel-kanaly.json';
import CablePage from "../../components/CablePage/CablePage";
import image from '../../photos/products/трубы-кабель-каналы.png'
function TrubyKabelKanalyPage() {
    return (
        <CablePage
            cardData={cardData}
            filterCardData={{}}
            cardImage={image}
            pageTitle={'Трубы, кабель-каналы'}
        />
    );
}

export default TrubyKabelKanalyPage;