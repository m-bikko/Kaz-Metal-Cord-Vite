import "./Contacts.css";
import NotFound from "../../components/NotFound/NotFound.jsx";
import GIS from "../../components/GIS/GIS.jsx"
function Contacts(){
    return(
        <div>
            <div className="contacts-full">
                <div className="contacts-title">
                    Контакты
                </div>
                <div className="telephone-email">
                    <div>
                        <span>Телефон: </span>
                        <div><a href="tel:87077049722"> +7 (707) 704 97-22</a></div>
                    </div>

                    <div>
                        <span>Почта: </span>
                        <div><a href="mailto: kazmetalcordkz@mail.ru"> kazmetalcordkz@mail.ru</a></div>
                    </div>

                </div>
                <div className="contacts-adress">
                    <div>г.Астана, район Нура, улица Култегин, дом 19/1, кв. 362</div>
                    <div>Пн-Пт: 09:00-18:00</div>
                    <div>Сб, Вс: выходной</div>
                </div>
            </div>
            <NotFound/>
            <GIS/>
        </div>

    );
}

export default Contacts;