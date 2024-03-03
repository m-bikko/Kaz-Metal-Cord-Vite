import React, {useState} from "react";
import './CablePage.css'
import CableHints from "../../components/CableHints/CableHints.jsx";
import Filter from "../../components/Filter/Filter.jsx";
import CardLoader from "../../components/CardLoader/CardLoader.jsx";
import Specification from "../../components/Specification/Specification.jsx";
import NotFound from "../../components/NotFound/NotFound.jsx";
import basket from "../../components/Shared/image/Basket.png"
import Popup from "../../components/Popup/Popup.jsx";

function CablePage() {

    const [isPopupOpen, setPopupOpen] = useState(false);


    return (
        <div className={`cable`}>
            <div className={`basket-container`}>
                <button onClick={() => setPopupOpen(true)}><img src={basket} alt={``}/></button>
            </div>
            <Popup isOpen={isPopupOpen} setIsOpen={setPopupOpen}>
                <p>asdasdass</p>
            </Popup>
            <CableHints/>
            <div className={`filter-text`}>
                <h2>Фильтры</h2>
            </div>
            <div className={`filter-cards`}>
                <Filter/>
                <CardLoader/>
            </div>
            <Specification/>
            <NotFound/>
        </div>
    )
}

export default CablePage;
