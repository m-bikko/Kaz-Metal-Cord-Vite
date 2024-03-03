import './App.css'
import './scripts.js'
import imgLogo from './photos/img_white.png';
import compass from "./photos/compass.png";
function Footer(){
    return(
        <>
            <footer className="footer">
                <div className="footer-logo">
                    <img className="footer-img-white" src={imgLogo} alt=""/>
                    <div className="footer-name-date">© 2024 KazMetalCord</div>
                </div>
                <div>
                    <div>
                        Главная
                    </div>
                    <div>
                        Каталог
                    </div>
                    <div>
                        Условия доставки
                    </div>
                    <div>
                        Как купить
                    </div>
                    <div>
                        Контакты
                    </div>
                    <div>
                        Провода силовые
                    </div>
                    <div>
                        Провода бытовые
                    </div>
                </div>
                <div>
                    <div>
                        Кабели силовые
                    </div>
                    <div>
                        Кабели контрольные
                    </div>
                    <div>
                        Кабели монтажные
                    </div>
                    <div>
                        Кабели передачи данных
                    </div>
                    <div>
                        Провода обмоточные
                    </div>
                    <div>
                        Трансформаторы
                    </div>
                    <div>
                        Освещение
                    </div>
                </div>
                <div>
                    <div>
                        Кабельные муфты и наконечники
                    </div>
                    <div>
                        Трубы, кабель-каналы
                    </div>
                    <div>
                        Провода неизолированные
                    </div>
                    <div>
                        Провода бортовые авиационные
                    </div>
                    <div>
                        Радиочастотные коаксиальные кабели
                    </div>
                </div>
                <div className="phone-call-section">
                    <div className="phone-call">
                        Обратный звонок
                    </div>
                    <div className="adress">
                        <img src={compass} alt=""/>
                        <div className="adress-txt">
                            <div>
                                г. Алматы, Жибек Жолы 135
                            </div>
                            <div>
                                + 7 (727) 312-26-02
                            </div>
                            <div>
                                zakaz@cablelines.kz
                            </div>
                        </div>

                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;