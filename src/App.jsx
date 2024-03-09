import './App.css'
import Nav from "./Nav.jsx";
import Footer from "./Footer.jsx";
import './scripts.js';
import MainPage from "./pages/MainPage/MainPage.jsx"
// import DeliveryPage from "./pages/Delivery/DeliveryPage.jsx";
import CablePage from "./pages/CablePage/CablePage.jsx";
// import HowToBuyPage from "./pages/HowToBuyPage/HowToBuyPage.jsx";
// import Contacts from "./pages/Contacts/Contacts.jsx";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage/PrivacyPolicyPage.jsx";
import { Routes, Route } from 'react-router-dom';
import Layout from "./Layout.jsx";
import Post from "./components/Post.jsx";

function App() {

  return (
    <Routes>
        <Route path="/" element={<Layout/>}>
            <Route index element={<MainPage/>}/>
            <Route path="kabeli-silovye" element={<CablePage/>}/>
            <Route path="post/:kabeli/:mark" element={<Post/>}/>
            <Route path="/privacy-policy" element={<PrivacyPolicyPage/>}/>
        </Route>
    </Routes>
  )
}

export default App
