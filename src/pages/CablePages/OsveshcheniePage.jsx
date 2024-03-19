import React from "react";
import cardData from '../../components/Shared/jsons/osveshchenie/osveshchenie.json';
import CablePage from "../../components/CablePage/CablePage";
import image from '../../photos/products/освещение.png'
function OsveshcheniePage() {
    return (
        <CablePage
            cardData={cardData}
            filterCardData={{}}
            cardImage={image}
            pageTitle={'Освещение'}
        />
    );
}

export default OsveshcheniePage;
