import '../../App.css'
import '../../scripts.js'
import imgLogo from '../../photos/img_white.png';
import compass from "../../photos/compass.png";
// import {a} from "react-router-dom";

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
                        <a className={`footer-link`} href={''}>Главная</a>
                    </div>
                    <div>
                        Каталог
                    </div>
                    <div>
                        <a className={`footer-link`} href={'dostavka'}>Условия доставки</a>
                    </div>
                    <div>
                        <a className={`footer-link`} href={'kak-kupit'}>Как купить</a>
                    </div>
                    <div>
                        <a className={`footer-link`} href={'contacts'}>Контакты</a>
                    </div>
                    <div>
                        <a className={`footer-link`} href={'provoda-silovye'}>Провода силовые</a>
                    </div>
                    <div>
                        Провода бытовые
                    </div>
                </div>
                <div>
                    <div>
                        <a className={`footer-link`} href={'kabeli-silovye'}>Кабели силовые</a>
                    </div>
                    <div>
                        <a className={`footer-link`} href={'kabeli-kontrolnie'}>Кабели контрольные</a>
                    </div>
                    <div>
                        <a className={`footer-link`} href={'kabeli-montazhnye'}>Кабели монтажные</a>
                    </div>
                    <div>
                        Кабели передачи данных
                    </div>
                    <div>
                        <a className={`footer-link`} href={'obmotochnye-provoda'}>Провода обмоточные</a>
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