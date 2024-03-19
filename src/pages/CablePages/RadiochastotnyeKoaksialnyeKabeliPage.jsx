import React from "react";
import cardData from '../../components/Shared/jsons/radiochastotnye-koaksialnye-kabeli/radiochastotnye-koaksialnye-kabeli.json';
import CablePage from "../../components/CablePage/CablePage";
import image from '../../photos/products/радиочастотные-коаксиальные-кабели.png'
function RadiochastotnyeKoaksialnyeKabeliPage() {
    return (
        <CablePage
            cardData={cardData}
            filterCardData={{}}
            cardImage={image}
            pageTitle={'Радиочастотные коаксиальные кабели'}
        />
    );
}

export default RadiochastotnyeKoaksialnyeKabeliPage;