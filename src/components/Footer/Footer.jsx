import '../../App.css'
import '../../scripts.js'
import imgLogo from '../../photos/img_white.png';
import compass from "../../photos/compass.png";
import React from "react";
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
                        <a className={`footer-link`} href={'/#catalog'}>Каталог</a>
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
                        <a className={`footer-link`} href={'provoda-bytovye'}>Провода бытовые</a>
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
                        <a className={`footer-link`} href={'kabeli-peredachi-dannyh'}>Кабели передачи данных</a>
                    </div>
                    <div>
                        <a className={`footer-link`} href={'obmotochnye-provoda'}>Провода обмоточные</a>
                    </div>
                    <div>
                        <a className={`footer-link`} href={'transformatory'}>Трансформаторы</a>
                    </div>
                    <div>
                        <a className={`footer-link`} href={'osveshchenie'}>Освещение</a>
                    </div>
                </div>
                <div>
                    <div>
                        <a className={`footer-link`} href={'kabelnye-mufty-i-nakonechniki'}>Кабельные муфты и наконечники</a>
                    </div>
                    <div>
                        <a className={`footer-link`} href={'truby-kabel-kanaly'}>Трубы, кабель-каналы</a>
                    </div>
                    <div>
                        <a className={`footer-link`} href={'neizolirovannye-provoda'}>Провода неизолированные</a>
                    </div>
                    <div>
                        <a className={`footer-link`} href={'provoda-bortovye-aviacionnye'}>Провода бортовые авиационные</a>
                    </div>
                    <div>
                        <a className={`footer-link`} href={'radiochastotnye-koaksialnye-kabeli'}>Радиочастотные коаксиальные кабели</a>
                    </div>
                    <div>
                        <a className={`footer-link`} href={'soedinitelnye-provoda'}>Соединительные провода</a>
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
                                г.Астана, район Нура
                            </div>
                            <div>
                                улица Култегин, дом 19/1, кв. 362
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