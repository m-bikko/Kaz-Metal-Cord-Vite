import './App.css'
import './scripts.js';
import MainPage from "./pages/MainPage/MainPage.jsx"
import DeliveryPage from "./pages/Delivery/DeliveryPage.jsx";
import CablePage from "./pages/CablePage/CablePage.jsx";
import HowToBuyPage from "./pages/HowToBuyPage/HowToBuyPage.jsx";
import Contacts from "./pages/Contacts/Contacts.jsx";
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
            <Route path="dostavka" element={<DeliveryPage/>}/>
            <Route path="contacts" element={<Contacts/>}/>
            <Route path="kak-kupit" element={<HowToBuyPage/>}/>
            <Route path="policy" element={<PrivacyPolicyPage/>}/>
            <Route path="post/:kabeli/:mark" element={<Post/>}/>
        </Route>
    </Routes>
  )
}

export default App
