import './CablePage.css'
import CableHints from "../../components/CableHints/CableHints.jsx";
import Filter from "../../components/Filter/Filter.jsx";
import CardLoader from "../../components/CardLoader/CardLoader.jsx";
import Specification from "../../components/Specification/Specification.jsx";
import NotFound from "../../components/NotFound/NotFound.jsx";
function CablePage() {

    return (
        <div className={`cable`}>
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
