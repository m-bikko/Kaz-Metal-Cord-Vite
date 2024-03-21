import React, {useState} from "react";
import Nav from "./components/Nav/Nav.jsx";
import Footer from "./components/Footer/Footer.jsx";
import {Outlet} from "react-router-dom";
import SearchComponent from "./components/SearchComponent/SearchComponent";

function Layout() {
    const [searchTerm, setSearchTerm] = useState("");

    const handleEnterPressed = (term) => {
        setSearchTerm(term);
    };

    return (
        <>
            <Nav onEnterPressed={handleEnterPressed}/>
            <div className="wrapper">
                <SearchComponent searchTerm={searchTerm}/>
                <Outlet/>
            </div>
            <Footer />
        </>
    )
}

export default Layout;
