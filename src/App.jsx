import './App.css'
import Nav from "./Nav.jsx";
import './scripts.js'
// import MainPage from "./MainPage.jsx"
import Footer from "./Footer.jsx"
import CablePage from "./pages/CablePage/CablePage.jsx";

function App() {

  return (
    <>
        <Nav />
        <div className="wrapper">
            <CablePage/>
        </div>
        <Footer />
    </>
  )
}

export default App
