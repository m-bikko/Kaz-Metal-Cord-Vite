import React from "react";
import cardData from '../../components/Shared/jsons/provoda-vozdushnyh-linij-ehlektroperedach/provoda-vozdushnyh-linij-ehlektroperedach.json';
import CablePage from "../../components/CablePage/CablePage";
import image from '../../photos/products/провода-для-воздушных-линий-электропередач.png'
function ProvodaVozdushnyhLinijEhlektroperedachPage() {
    return (
        <CablePage
            cardData={cardData}
            filterCardData={{}}
            cardImage={image}
            pageTitle={'Провода для воздушных линий электропередач'}
        />
    );
}

export default ProvodaVozdushnyhLinijEhlektroperedachPage;