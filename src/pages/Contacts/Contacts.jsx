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
                        <div>+7 (771) 391-88-40</div>
                    </div>

                    <div>
                        <span>Почта: </span>
                        <div>kazmetalcord@gmail.com</div>
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