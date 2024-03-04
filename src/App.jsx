import './App.css'
import Nav from "./Nav.jsx";
import Footer from "./Footer.jsx";
import './scripts.js';
// import MainPage from "./pages/MainPage/MainPage.jsx"
// import DeliveryPage from "./pages/Delivery/DeliveryPage.jsx";
// import CablePage from "./pages/CablePage/CablePage.jsx";
// import HowToBuyPage from "./pages/HowToBuyPage/HowToBuyPage.jsx";
// import Contacts from "./pages/Contacts/Contacts.jsx";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage/PrivacyPolicyPage.jsx";
function App() {

  return (
    <>
        <Nav />
        <div className="wrapper">
            <PrivacyPolicyPage/>
        </div>
        <Footer />
    </>
  )
}

export default App
