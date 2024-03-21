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
import NeizolirovannyeProvodaPage from "./pages/CablePages/NeizolirovannyeProvodaPage";
import KabeliPeredachiDannyhPage from "./pages/CablePages/KabeliPeredachiDannyhPage";
import OsveshcheniePage from "./pages/CablePages/OsveshcheniePage";
import ProvodaBortovyeAviacionnyePage from "./pages/CablePages/ProvodaBortovyeAviacionnyePage";
import ProvodaBytovyePage from "./pages/CablePages/ProvodaBytovyePage";
import ProvodaUstanovochnyePage from "./pages/CablePages/ProvodaUstanovochnyePage";
import ProvodaVodopogruzhnyePage from "./pages/CablePages/ProvodaVodopogruzhnyePage";
import ProvodaVozdushnyhLinijEhlektroperedachPage from "./pages/CablePages/ProvodaVozdushnyhLinijEhlektroperedachPage";
import RadiochastotnyeKoaksialnyeKabeliPage from "./pages/CablePages/RadiochastotnyeKoaksialnyeKabeliPage";
import TransformatoryPage from "./pages/CablePages/TransformatoryPage";
import TrubyKabelKanalyPage from "./pages/CablePages/TrubyKabelKanalyPage";

import SearchComponent from "./components/SearchComponent/SearchComponent";
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
                <Route path="neizolirovannye-provoda" element={<NeizolirovannyeProvodaPage/>}/>
                <Route path="kabeli-peredachi-dannyh" element={<KabeliPeredachiDannyhPage/>}/>
                <Route path="osveshchenie" element={<OsveshcheniePage/>}/>
                <Route path="provoda-bortovye-aviacionnye" element={<ProvodaBortovyeAviacionnyePage/>}/>
                <Route path="provoda-bytovye" element={<ProvodaBytovyePage/>}/>
                <Route path="provoda-ustanovochnye" element={<ProvodaUstanovochnyePage/>}/>
                <Route path="provoda-vodopogruzhnye" element={<ProvodaVodopogruzhnyePage/>}/>
                <Route path="provoda-vozdushnyh-linij-ehlektroperedach" element={<ProvodaVozdushnyhLinijEhlektroperedachPage/>}/>
                <Route path="radiochastotnye-koaksialnye-kabeli" element={<RadiochastotnyeKoaksialnyeKabeliPage/>}/>
                <Route path="transformatory" element={<TransformatoryPage/>}/>
                <Route path="truby-kabel-kanaly" element={<TrubyKabelKanalyPage/>}/>

                <Route path="dostavka" element={<DeliveryPage/>}/>
                <Route path="contacts" element={<Contacts/>}/>
                <Route path="kak-kupit" element={<HowToBuyPage/>}/>
                <Route path="policy" element={<PrivacyPolicyPage/>}/>
            </Route>
        </Routes>
    )
}

export default App
