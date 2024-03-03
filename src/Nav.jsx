import './App.css'
import './scripts.js'
import imgLogo from './photos/img.png';
import imgSearch from './photos/search.png';
import imgDropDownWhite from './photos/drop-down-white.png';
import imgDropDownSvg from './photos/drop-down.svg';

function Nav(){
    return(
        <>
            <nav className="responsive-nav">
                <div id="responsive-nav-upper" className="responsive-nav-upper">
                    <div className="container" onClick="myFunction(this)">
                        <div id="bar1" className="bar1"></div>
                        <div id="bar2" className="bar2"></div>
                        <div id="bar3" className="bar3"></div>
                    </div>
                    <img id="responsive-nav-upper-logo" className="logo" src={imgLogo} alt="logo"/>
                    <img id="responsive-nav-upper-search" className="search-res" src={imgSearch} alt=""/>
                </div>
                <div id="responsive-nav-under" className="responsive-nav-under hide">
                    <div className="">
                        Главная
                    </div>
                    <div className="dropdown">
                        <button className="responsive-dropbtn" onClick="dropContent()">Каталог
                            <img id="responsive-dropbtn-img" className="responsive-dropdown-svg" src={imgDropDownWhite} alt=""/>
                        </button>
                        <div id="responsive-nav-drop" className="hide dropbtn-dropped">
                            <a href="#">Кабели силовые</a>
                            <a href="#">Кабели контрольные</a>
                            <a href="#">Кабели монтажные</a>
                            <a href="#">Кабели передачи данных</a>
                            <a href="#">Радиочастотные коаксиальные кабели</a>
                            <a href="#">Провода установочные (монтажные)</a>
                            <a href="#">Провода обмоточные</a>
                            <a href="#">Соединительные провода</a>
                            <a href="#">Провода водопогружные</a>
                            <a href="#">Провода силовые</a>
                            <a href="#">Провода воздушных линий электропередач</a>
                            <a href="#">Провода бытовые</a>
                            <a href="#">Провода бортовые авиационные</a>
                            <a href="#">Трансформаторы</a>
                            <a href="#">Освещение</a>
                            <a href="#">Гофра</a>
                        </div>
                    </div>
                    <div className="">
                        Условия доставки
                    </div>
                    <div className="">
                        Как купить
                    </div>
                    <div className="">
                        Контакты
                    </div>
                    <div>
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
                    <div>
                        <div className="responsive-nav-top-btn">
                            Обратный звонок
                        </div>
                    </div>

                </div>
            </nav>


            <nav className="desktop-nav wrapper mt-30">
                <div className="nav-top">
                    <img className="logo" src={imgLogo} alt="logo"/>
                    <fieldset className="field-container">
                        <input type="text" placeholder="Поиск" className="field"/>
                        <div className="icons-container">
                            <div className="icon-search"></div>
                            <div className="icon-close">
                                <div className="x-up"></div>
                                <div className="x-down"></div>
                            </div>
                        </div>
                    </fieldset>
                    <div>
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
                    <div className="nav-top-btn">
                        Обратный звонок
                    </div>
                </div>
                <div className="nav-bottom">
                    <div className="hover-underline-animation">
                        Главная
                    </div>
                    <div className="dropdown">
                        <div className="hover-underline-animation dropbtn">Каталог
                            <img className="dropdown-svg" src={imgDropDownSvg} alt=""/>
                            <i className="fa fa-caret-down"></i>
                        </div>
                        <div className="dropdown-content">
                            <a href="#">Кабели силовые</a>
                            <a href="#">Кабели контрольные</a>
                            <a href="#">Кабели монтажные</a>
                            <a href="#">Кабели передачи данных</a>
                            <a href="#">Радиочастотные коаксиальные кабели</a>
                            <a href="#">Провода установочные (монтажные)</a>
                            <a href="#">Провода обмоточные</a>
                            <a href="#">Соединительные провода</a>
                            <a href="#">Провода водопогружные</a>
                            <a href="#">Провода силовые</a>
                            <a href="#">Провода воздушных линий электропередач</a>
                            <a href="#">Провода бытовые</a>
                            <a href="#">Провода бортовые авиационные</a>
                            <a href="#">Трансформаторы</a>
                            <a href="#">Освещение</a>
                            <a href="#">Гофра</a>
                        </div>
                    </div>
                    <div className="hover-underline-animation">
                        Условия доставки
                    </div>
                    <div className="hover-underline-animation">
                        Как купить
                    </div>
                    <div className="hover-underline-animation">
                        Контакты
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav