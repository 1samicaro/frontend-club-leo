import './App.css';

import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Home from './view/home/Home';
import SignIn from './view/signin/SignIn';
import SignUp from './view/signup/SignUp';
import Profile from './view/profile/Profile';
import Descendants from './view/descendants/Descendants';
import History from './view/sendPoints/History'
import EditProfile from './view/editProfile/EditProfile';
import AboutUs from './view/aboutUs/AboutUs';
import Privacydata from './view/privacydata/Privacydata';
import Terms from './view/terms/Terms';
import Regulation from './view/regulation/Regulation';
import RegulationsPlanFriends from './view/regulationsplanfriends/RegulationsPlanFriends';
import ReglamentoEscritores from './view/reglamentoEscritores/ReglamentoEscritores';
import Team from './view/team/Team';
import Sell from './view/sell/Sell';
import Buy from './view/buy/Buy';
import Benefits from './view/benefits/Benefits';
import Joinus from './view/joinus/Joinus';
// import Category from './view/category/Category';
import Credit from './view/credit/Credit';
import Books from './view/books/Books';
import Paid from './view/paid/Paid.jsx';
import ViewWord from './view/viewWord/ViewWord';
import SendPay from './view/sendPay/SendPay.jsx';
import AcercaDe from './view/acercaDe/AcercaDe.jsx';
import SobreNos from './view/sobreNos/SobreNos.jsx';
import AProposDeNous from './view/aProposDeNous/AProposDeNous.jsx';
import ChiSiamo from './view/chiSiamo/ChiSiamo.jsx';
import Unetenos from './view/unetenos/Unetenos.jsx';
import UniscitiANoi from './view/uniscitiANoi/UniscitiANoi.jsx';
import RejoignezNous from './view/rejoignezNous/RejoignezNous.jsx';
import JunteSeANos from './view/junteSeANos/JunteSeANos.jsx';
import TablasOrganizadas from './view/tablasOrganizadas/TablasOrganizadas.jsx';
import SignupEnglish from './view/signup/SignupEnglish.jsx';
import SignUpFranch from './view/signup/SignUpFranch.jsx';
import SignUpPortuguese from './view/signup/SignUpPortuguese.jsx';
import SignUpItalian from './view/signup/SignUpItalian.jsx';

// import { initMercadoPago } from "@mercadopago/sdk-react";

// initMercadoPago("TEST-4c9e6322-d093-4c9f-bc7c-fa2efa2e04bf");

function App() {

  const [isReadyForInstall, setIsReadyForInstall] = useState(false);

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (event) => {
    // Prevent the mini-infobar from appearing on mobile.

    //el eventprevent es para que cargue solo
    event.preventDefault();
    // console.log("👍", "beforeinstallprompt", event);
    // Stash the event so it can be triggered later.
    window.deferredPrompt = event;
    // Remove the 'hidden' className from the install button    ainer.
    setIsReadyForInstall(true);
    });
  }, []);

  async function downloadPwa(){
    console.log("👍", "butInstall-clicked");
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
    // The deferred prompt isn't available.
      console.log("oops, no prompt event guardado en window");
      return;
    }
    // Show the install prompt.

    //el prompt solo puede ser escuchado una vez por sesión para no saturar con llamadas "descargame"
    promptEvent.prompt();
    // Log the result
    const result = await promptEvent.userChoice;
    console.log("👍", "userChoice", result);
    // Reset the deferred prompt variable, since
    // prompt() can only be called once.
    window.deferredPrompt = null;
    // Hide the install button.
    setIsReadyForInstall(false);
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/SignIn' element={<SignIn />}/>
        <Route path='/SignUp' element={<SignUp />}/>
        <Route path='/SignUpEnglish' element={<SignupEnglish />}/>
        <Route path='/SignUpFranch' element={<SignUpFranch />}/>
        <Route path='/SignUpPortuguese' element={<SignUpPortuguese />}/>
        <Route path='/SignUpItalian' element={<SignUpItalian />}/>


        <Route path='/Profile' element={<Profile />}/>
        <Route path='/Descendants' element={<Descendants />}/>
        <Route path='/History' element={<History />}/>
        <Route path='/EditProfile' element={<EditProfile />}/>


        <Route path='/AcercaDe' element={<AcercaDe />}/>
        <Route path='/AboutUs' element={<AboutUs />}/>
        <Route path='/AProposDeNous' element={<AProposDeNous />}/>
        <Route path='/SobreNos' element={<SobreNos />}/>
        <Route path='/ChiSiamo' element={<ChiSiamo />}/>

        <Route path='/Unetenos' element={<Unetenos />}/>
        <Route path='/Joinus' element={<Joinus />}/>
        <Route path='/RejoignezNous' element={<RejoignezNous />}/>
        <Route path='/JunteSeANos' element={<JunteSeANos />}/>
        <Route path='/UniscitiANoi' element={<UniscitiANoi />}/>

        <Route path='/Privacydata' element={<Privacydata />}/>
        <Route path='/Terms' element={<Terms />}/>
        <Route path='/Regulation' element={<Regulation />}/>
        <Route path='/RegulationsPlanFriends' element={<RegulationsPlanFriends/>}/>
        <Route path='/ReglamentoEscritores' element={<ReglamentoEscritores/>}/>


        <Route path='/Team' element={<Team />}/>
        <Route path='/Sell' element={<Sell />}/>
        <Route path='/Buy' element={<Buy />}/>
        <Route path='/Benefits' element={<Benefits />}/>
        <Route path='/Joinus' element={<Joinus />}/>
        <Route path='/Credit' element={<Credit />}/>
        <Route path='/sendpay' element={<SendPay />}/>
        {/* <Route path='/:name/:id' element={<Category />}/> */}
        <Route path='/books' element={<Books />}/>
        <Route path='/organizedBooks/:language/:select' element={<TablasOrganizadas />}/>

        <Route path='/paid' element={<Paid />}/>
        <Route path='/viewWord/:id' element={<ViewWord />}/>
      </Routes>
    </div>
  );
}

export default App;


