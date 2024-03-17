
import Nav from "./components/Nav/Nav.jsx";
import Footer from "./components/Footer/Footer.jsx";
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
