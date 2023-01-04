import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Equipo from './Equipo';
import Footer from './Footer';
import PlayerInfo from './PlayerInfo';
import Eventos from './Eventos';
import EventInfo from './EventInfo';
import Estatutos from './Estatutos';
import AcercaDe from './AcercaDe';
import Contactos from './Contactos';
import Servicios from './Servicios';
import ServiciosInfo from './ServiciosInfo';
import Personal from './Personal';
import PersonalInfo from './Personalnfo';
import Home from './Home';
import ErrorPage from './ErrorPage';
import GlobalEdit from './GlobalEdit';

function App() {
  return (
    <div className="App">

      

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Equipo" element={<Equipo/>}/>
          <Route path="/Equipo/:id" element={<PlayerInfo/>}/>
          <Route path="/Eventos" element={<Eventos/>}/>
          <Route path="/Eventos/:id" element={<EventInfo/>}/>
          <Route path="/Acerca_De" element={<AcercaDe/>}/>
          <Route path="/Acerca_De/Estatutos" element={<Estatutos/>}/>
          <Route path="/Acerca_De/Personal" element={<Personal/>}/>
          <Route path="/Acerca_De/Personal/:id" element={<PersonalInfo/>}/>
          <Route path="/Servicios" element={<Servicios/>}/>
          <Route path="/Servicios/:id" element={<ServiciosInfo/>}/>
          <Route path="/Contactos" element={<Contactos/>}/>
          <Route path="*" element={<ErrorPage/>}/>
          <Route path="/GlobalEdit" element={<GlobalEdit/>}/>


          
        </Routes>
      </BrowserRouter>

      <Footer/>
    </div>
  );
}

export default App;
