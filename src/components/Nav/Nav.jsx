import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import imgLogo from '../../photos/img.png';
import imgSearch from '../../photos/search.png';
import imgDropDownWhite from '../../photos/drop-down-white.png';
import imgDropDownSvg from '../../photos/drop-down.svg';
import imgSearchWhite from '../../photos/search_white.png'; // Make sure to import this
import imgLogoWhite from '../../photos/img_white.png'; // Make sure to import this
import '../../App.css';


function Nav({onEnterPressed}){

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


    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };
    const handleCleanChange = () => {
        setSearchTerm("");
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter" && event.target.value !== '') {
            onEnterPressed(searchTerm);
        }
    };

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
                            <Link to="kabeli-kontrolnie">Кабели контрольные</Link>
                            <Link to="kabeli-montazhnye">Кабели монтажные</Link>
                            <Link to="kabeli-peredachi-dannyh">Кабели передачи данных</Link>
                            <Link to="radiochastotnye-koaksialnye-kabeli">Радиочастотные коаксиальные кабели</Link>
                            <Link to="provoda-ustanovochnye">Провода установочные (монтажные)</Link>
                            <Link to="obmotochnye-provoda">Провода обмоточные</Link>
                            <Link to="soedinitelnye-provoda">Соединительные провода</Link>
                            <Link to="provoda-vodopogruzhnye">Провода водопогружные</Link>
                            <Link to="provoda-silovye">Провода силовые</Link>
                            <Link to="provoda-vozdushnyh-linij-ehlektroperedach">Провода воздушных линий электропередач</Link>
                            <Link to="provoda-bytovye">Провода бытовые</Link>
                            <Link to="provoda-bortovye-aviacionnye">Провода бортовые авиационные</Link>
                            <Link to="transformatory">Трансформаторы</Link>
                            <Link to="osveshchenie">Освещение</Link>
                            <Link to="#">Гофра</Link>
                        </div>
                    </div>
                    <div className="">
                        <Link className={`nav-link`} to={`dostavka`}>Условия доставки</Link>
                    </div>
                    <div className="">
                        <Link className={`nav-link`} to={`kak-kupit`}>Как купить</Link>
                    </div>
                    <div className="">
                        <Link className={`nav-link`} to={`contacts`}>Контакты</Link>
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
                        <input type="text" placeholder="Поиск" className="field" value={searchTerm} onChange={handleChange} onKeyPress={handleKeyPress}/>
                        <div className="icons-container" onClick={handleCleanChange}>
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
                            {/* Dropdown links would be similar to those in the responsive nav */}
                            <Link to="kabeli-silovye">Кабели силовые</Link>
                            <Link to="kabeli-kontrolnie">Кабели контрольные</Link>
                            <Link to="kabeli-montazhnye">Кабели монтажные</Link>
                            <Link to="kabeli-peredachi-dannyh">Кабели передачи данных</Link>
                            <Link to="radiochastotnye-koaksialnye-kabeli">Радиочастотные коаксиальные кабели</Link>
                            <Link to="provoda-ustanovochnye">Провода установочные (монтажные)</Link>
                            <Link to="obmotochnye-provoda">Провода обмоточные</Link>
                            <Link to="soedinitelnye-provoda">Соединительные провода</Link>
                            <Link to="provoda-vodopogruzhnye">Провода водопогружные</Link>
                            <Link to="provoda-silovye">Провода силовые</Link>
                            <Link to="provoda-vozdushnyh-linij-ehlektroperedach">Провода воздушных линий электропередач</Link>
                            <Link to="provoda-bytovye">Провода бытовые</Link>
                            <Link to="provoda-bortovye-aviacionnye">Провода бортовые авиационные</Link>
                            <Link to="transformatory">Трансформаторы</Link>
                            <Link to="osveshchenie">Освещение</Link>
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