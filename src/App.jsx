import './App.css'
import Nav from "./Nav.jsx";
import './scripts.js'
import MainPage from "./MainPage.jsx"
import Footer from "./Footer.jsx"

function App() {

  return (
    <>
        <Nav />
        <div className="wrapper">
            <MainPage/>
        </div>
        <Footer />
    </>
  )
}

export default App
