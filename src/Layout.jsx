
import Nav from "./Nav.jsx";
import Footer from "./Footer.jsx";
import {Outlet} from "react-router-dom";

function Layout() {

    return (
        <>
            <Nav />
            <div className="wrapper">
                <Outlet/>
            </div>
            <Footer />
        </>
    )
}

export default Layout;
