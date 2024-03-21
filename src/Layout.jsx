import React, {useState} from "react";
import Nav from "./components/Nav/Nav.jsx";
import Footer from "./components/Footer/Footer.jsx";
import {Outlet, useNavigate} from "react-router-dom";

function Layout() {
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();
    const handleEnterPressed = (term) => {
        setSearchTerm(term);
        navigate(`/search/${term}`)
    };

    return (
        <>
            <Nav onEnterPressed={handleEnterPressed}/>
            <div className="wrapper">
                <Outlet/>
            </div>
            <Footer />
        </>
    )
}

export default Layout;
