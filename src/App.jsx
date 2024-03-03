import './App.css'
import Nav from "./Nav.jsx";
import './scripts.js'
// import MainPage from "./pages/MainPage/MainPage.jsx"
import Footer from "./Footer.jsx"
import DeliveryPage from "./pages/Delivery/DeliveryPage.jsx";
// import CablePage from "./pages/CablePage/CablePage.jsx";

function App() {

  return (
    <>
        <Nav />
        <div className="wrapper">
            <DeliveryPage/>
        </div>
        <Footer />
    </>
  )
}

export default App
