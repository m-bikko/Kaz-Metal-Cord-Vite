import {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import imgLogo from '../../photos/img.png';
import imgSearch from '../../photos/search.png';
import imgDropDownWhite from '../../photos/drop-down-white.png';
import imgDropDownSvg from '../../photos/drop-down.svg';
import imgSearchWhite from '../../photos/search_white.png'; // Make sure to import this
import imgLogoWhite from '../../photos/img_white.png'; // Make sure to import this
import '../../App.css';


function Nav(){

    const [navUnderClass, setNavUnderClass] = useState("responsive-nav-under hide");
    const [searchIcon, setSearchIcon] = useState(imgSearch);
    const [logo, setLogo] = useState(imgLogo);
    const [dropDownClass, setDropDownClass] = useState("hide");
    const [dropDownImgRotation, setDropDownImgRotation] = useState("0deg");

    const toggleNav = () => {
        if (navUnderClass.includes("hide")) {
            setNavUnderClass("responsive-nav-under");
            setSearchIcon(imgSearchWhite);
            setLogo(imgLogoWhite);
        } else {
            setNavUnderClass("responsive-nav-under hide");
            setSearchIcon(imgSearch);
            setLogo(imgLogo);
        }
    };

    const toggleDropDown = () => {
        if (dropDownClass === "hide") {
            setDropDownClass("");
            setDropDownImgRotation("180deg");
        } else {
            setDropDownClass("hide");
            setDropDownImgRotation("0deg");
        }
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.matches('.responsive-dropbtn')) {
                setDropDownClass("hide");
                setDropDownImgRotation("0deg");
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);



    return(

        <>
            <nav className="responsive-nav">
                <div className="responsive-nav-upper" style={{ backgroundColor: navUnderClass.includes("hide") ? "#ffffff" : "#6D2CC1" }}>
                    <div className="container" onClick={toggleNav}>
                        <div className="bar1" style={{ backgroundColor: navUnderClass.includes("hide") ? "#333" : "white" }}></div>
                        <div className="bar2" style={{ backgroundColor: navUnderClass.includes("hide") ? "#333" : "white" }}></div>
                        <div className="bar3" style={{ backgroundColor: navUnderClass.includes("hide") ? "#333" : "white" }}></div>
                    </div>
                    <img className="logo" src={logo} alt="logo"/>
                    <img className="search-res" src={searchIcon} alt="" style={{ width: navUnderClass.includes("hide") ? "60px" : "30px", height: navUnderClass.includes("hide") ? "60px" : "30px" }}/>
                </div>
                <div className={navUnderClass}>
                    {/* Content goes here */}
                    <div className="dropdown">
                        <button className="responsive-dropbtn" onClick={toggleDropDown}>Каталог
                            <img className="responsive-dropdown-svg" src={imgDropDownWhite} alt=""
                                 style={{transform: `rotate(${dropDownImgRotation})`}}/>
                        </button>
                        <div className={dropDownClass + " dropbtn-dropped"}>
                            <Link to="kabeli-silovye">Кабели силовые</Link>
                            <Link to="#">Кабели контрольные</Link>
                            <Link to="#">Кабели монтажные</Link>
                            <Link to="#">Кабели передачи данных</Link>
                            <Link to="#">Радиочастотные коаксиальные кабели</Link>
                            <Link to="#">Провода установочные (монтажные)</Link>
                            <Link to="#">Провода обмоточные</Link>
                            <Link to="#">Соединительные провода</Link>
                            <Link to="#">Провода водопогружные</Link>
                            <Link to="#">Провода силовые</Link>
                            <Link to="#">Провода воздушных линий электропередач</Link>
                            <Link to="#">Провода бытовые</Link>
                            <Link to="#">Провода бортовые авиационные</Link>
                            <Link to="#">Трансформаторы</Link>
                            <Link to="#">Освещение</Link>
                            <Link to="#">Гофра</Link>
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


            {/* Desktop navigation part */}
            <nav className="desktop-nav wrapper mt-30">
                <div className="nav-top">
                    <Link to={``}><img className="logo" src={imgLogo} alt="logo"/></Link>
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
                        <Link className={`nav-link`} to={``}>Главная</Link>
                    </div>
                    <div className="dropdown">
                        <div className="hover-underline-animation dropbtn">Каталог
                            <img className="dropdown-svg" src={imgDropDownSvg} alt=""/>
                            <i className="fa fa-caret-down"></i>
                        </div>
                        <div className="dropdown-content">
                            <Link to="kabeli-silovye">Кабели силовые</Link>
                            <Link to="#">Кабели контрольные</Link>
                            <Link to="#">Кабели монтажные</Link>
                            <Link to="#">Кабели передачи данных</Link>
                            <Link to="#">Радиочастотные коаксиальные кабели</Link>
                            <Link to="#">Провода установочные (монтажные)</Link>
                            <Link to="#">Провода обмоточные</Link>
                            <Link to="#">Соединительные провода</Link>
                            <Link to="#">Провода водопогружные</Link>
                            <Link to="#">Провода силовые</Link>
                            <Link to="#">Провода воздушных линий электропередач</Link>
                            <Link to="#">Провода бытовые</Link>
                            <Link to="#">Провода бортовые авиационные</Link>
                            <Link to="#">Трансформаторы</Link>
                            <Link to="#">Освещение</Link>
                            <Link to="#">Гофра</Link>
                        </div>
                    </div>
                    <div className="hover-underline-animation">
                        <Link className={`nav-link`} to={`dostavka`}>Условия доставки</Link>
                    </div>
                    <div className="hover-underline-animation">
                        <Link className={`nav-link`} to={`kak-kupit`}>Как купить</Link>
                    </div>
                    <div className="hover-underline-animation">
                        <Link className={`nav-link`} to={`contacts`}>Контакты</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav