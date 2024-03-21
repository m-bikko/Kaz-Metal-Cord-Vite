import React, {useState} from "react";
import './SearchComponent.css'
import Card from "../Card/Card";
import jsonData from "../Shared/for-search-all-products.json";
import kabeli_silovye from '../../photos/products/кабели-силовые.png'
import neizolirovannye_provoda from '../../photos/products/неизолированные-провода.png'
import provoda_obmotachnye from '../../photos/products/обмоточные-провода.png'
import osvechenye from '../../photos/products/освещение.png'
import provoda_aviacionnye from '../../photos/products/провода-бортовые-авиационные.png'
import provoda_bytovye from '../../photos/products/провода-бытовые.png'
import provoda_silovye from '../../photos/products/провода-силовые.png'
import provoda_ustanovochnye from '../../photos/products/провода-установочные.png'
import provoda_vodopogruzhnye from '../../photos/products/провода-водопогружные.png'
import provoda_vozdushnyh_linij_ehlektroperedach from '../../photos/products/провода-для-воздушных-линий-электропередач.png'
import radiochastotnye_koaksialnye_kabeli from '../../photos/products/радиочастотные-коаксиальные-кабели.png'
import soedinitelnye_provoda from '../../photos/products/соединительные-провода.png'
import truba from '../../photos/products/трубы-кабель-каналы.png'
import truba_gofra from '../../photos/products/труба-гофра.png'
import metalorukav from '../../photos/products/металлорукав.png'


const SearchComponent = ({ searchTerm }) => {

    const [visibleCards, setVisibleCards] = useState(6);


    const searchResults = jsonData.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleLoadMore = () => {
        if(searchResults.length > visibleCards + 6){
            setVisibleCards(prevVisibleItems => prevVisibleItems + 6);
        }
        else {
            setVisibleCards(prevVisibleItems => prevVisibleItems + (searchResults.length - prevVisibleItems));
        }
    };

    const canLoadMore = visibleCards < searchResults.length;

    const obj = {
        "Кабель силовой" : kabeli_silovye,
        "Провод неизолированный" : neizolirovannye_provoda,
        "Провода обмоточные" : provoda_obmotachnye,
        "Освещение" : osvechenye,
        "Провод авиационный" : provoda_aviacionnye,
        "Провод бытовой" : provoda_bytovye,
        "Провод силовой" : provoda_silovye,
        "Провода установочные (монтажные)" : provoda_ustanovochnye,
        "Провода водопогружные" : provoda_vodopogruzhnye,
        "Провод для воздушных линий" : provoda_vozdushnyh_linij_ehlektroperedach,
        "Радиочастотные коаксиальные кабели" : radiochastotnye_koaksialnye_kabeli,
        "Соединительные провода" : soedinitelnye_provoda,
        "Труба" : truba,
        "Труба гофра" : truba_gofra,
        "Металлорукав" : metalorukav
    }

    if (!searchTerm) {
        return <></>;
    }
    return (
        <div className='search-comp'>
            <div className='search-card-container'>
                {searchResults.slice(0, visibleCards).map((item) => (
                    <Card key={item.productId} productId={item.productId} name={item.name} description={item.description} image={obj[item.category]} price={item.price}/>
                ))}
            </div>
            {
                canLoadMore && (
                    <div className={`download-button`}>
                        <button onClick={handleLoadMore}>Загрузить еще</button>
                    </div>
                )}
        </div>
    );
};

export default SearchComponent;
