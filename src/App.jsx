import './App.css'
import './scripts.js';
import MainPage from "./pages/MainPage/MainPage.jsx"
import DeliveryPage from "./pages/Delivery/DeliveryPage.jsx";
import HowToBuyPage from "./pages/HowToBuyPage/HowToBuyPage.jsx";
import Contacts from "./pages/Contacts/Contacts.jsx";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage/PrivacyPolicyPage.jsx";
import { Routes, Route } from 'react-router-dom';
import Layout from "./Layout.jsx";

import KabeliSilovyePage from "./pages/CablePages/KabeliSilovyePage";
import KabeliKontrolniePage from "./pages/CablePages/KabeliKontrolniePage";
import KabeliMontazhnyePage from "./pages/CablePages/KabeliMontazhnyePage";
import ObmotochnyeProvodaPage from "./pages/CablePages/ObmotochnyeProvodaPage";
import KabelnyeMuftyNakonechnikiPage from "./pages/CablePages/KabelnyeMuftyNakonechnikiPage";
import ProvodaSilovyePage from "./pages/CablePages/ProvodaSilovyePage";
import SoedinitelnyeProvodaPage from "./pages/CablePages/SoedinitelnyeProvodaPage";


function App() {

    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<MainPage/>}/>
                <Route path="kabeli-silovye" element={<KabeliSilovyePage/>}/>
                <Route path="kabeli-kontrolnie" element={<KabeliKontrolniePage/>}/>
                <Route path="kabeli-montazhnye" element={<KabeliMontazhnyePage/>}/>
                <Route path="obmotochnye-provoda" element={<ObmotochnyeProvodaPage/>}/>
                <Route path="kabelnye-mufty-i-nakonechniki" element={<KabelnyeMuftyNakonechnikiPage/>}/>
                <Route path="provoda-silovye" element={<ProvodaSilovyePage/>}/>
                <Route path="soedinitelnye-provoda" element={<SoedinitelnyeProvodaPage/>}/>

                <Route path="dostavka" element={<DeliveryPage/>}/>
                <Route path="contacts" element={<Contacts/>}/>
                <Route path="kak-kupit" element={<HowToBuyPage/>}/>
                <Route path="policy" element={<PrivacyPolicyPage/>}/>
                {/*<Route path="post/:kabeli/:mark" element={<Post/>}/>*/}
            </Route>
        </Routes>
    )
}

export default App
