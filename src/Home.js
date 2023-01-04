import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import PlayerSlideBar from "./PlayerSlideBar";
import ServeciosPreview from "./ServiciosPreview";
import SlideBar from "./SlideBar";
import firebase from 'firebase/compat/app';
import firebaseConfig from "./Firebase/firebase";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const Home = () => {

    const [infoServicios,setInfoServicios] = useState([
        {
            Titulo: "Entrenamiento Principiantes",
            DescripcionBreve: "Entrenamiento de iniciacion para nuevos ateltas",
            Descripcion: "Servicio de entrenamiento a personas que están iniciando en la practica activa del tenis de mesa y que desean conocer los fundamentos de la técnica apropiada del deporte.\n\n Se imparte las clases en un horario de 6:00 pm a 7:30 pm por un valor de Lps 300 / Mes . las clases son impartidas 3 veces a la semana. \n\nSon utilizadas 12 mesas , pelotas profesionales , robots y la atención personalizada de especialistas del deporte",
            Precio: "L.300 por mes",
            gallery:["https://media.istockphoto.com/photos/little-girl-playing-table-tennis-picture-id946780844?k=20&m=946780844&s=170667a&w=0&h=CzZ92WnkohHJkM60QKjEwDHXILLp2X1n-NkfvmRi90Y="],
            imagen:"https://media.istockphoto.com/photos/little-girl-playing-table-tennis-picture-id946780844?k=20&m=946780844&s=170667a&w=0&h=CzZ92WnkohHJkM60QKjEwDHXILLp2X1n-NkfvmRi90Y=",
            id:1
        },

        {
            Titulo: "Entrenamiento Avanzados",
            DescripcionBreve: "Entrenamiento para atletas de alto rendimiento",
            Descripcion: " Servicio de entrenamiento a personas que ya conocen los fundamentos del tenis de mesa y que poseen un nivel competitivo con alguna participación en eventos nacionales e internacionales.\n\nEL entrenamiento incluye planificaciones de preparación física, táctica y mental.\n\nRutinas de entrenamiento orientadas al incremento del nivel y la resistencia apuntando a formar jugadores que peleen las posiciones de honor en los campeonatos nacionales e internacionales.\n\nEl costo del entrenamiento es de Lps 500 /mes. Se realizan 5 practicas por semana en un horario de 7:30 pm a 9:00 PM ",
            Precio: "L.500 por mes",
            gallery:["https://media.istockphoto.com/photos/little-girl-playing-table-tennis-picture-id946780844?k=20&m=946780844&s=170667a&w=0&h=CzZ92WnkohHJkM60QKjEwDHXILLp2X1n-NkfvmRi90Y="],
            imagen:"https://media.istockphoto.com/photos/little-girl-playing-table-tennis-picture-id946780844?k=20&m=946780844&s=170667a&w=0&h=CzZ92WnkohHJkM60QKjEwDHXILLp2X1n-NkfvmRi90Y=",
            id:2
        },

        {
            Titulo: "Entrenamiento Niños",
            DescripcionBreve: "Entrenamiento para niños para desarrollar habilidades basicas",
            Descripcion: "Nuestra cantera de Jugadores, entrenamiento especializado para desarrollar y explotar el talento de los pequeños campeones. \n\nEl entrenamiento está planificado para rápidamente generar la habilidad en los pequeños para que rápidamente eleven su nivel competitivo e integren las selecciones nacionales menores del país.\n\nEl valor del entrenamiento es de Lps 300 / mes . Se realizan 3 practicas a la semana.",
            Precio: "L.300 por mes",
            gallery:["https://media.istockphoto.com/photos/little-girl-playing-table-tennis-picture-id946780844?k=20&m=946780844&s=170667a&w=0&h=CzZ92WnkohHJkM60QKjEwDHXILLp2X1n-NkfvmRi90Y="],
            imagen:"https://media.istockphoto.com/photos/little-girl-playing-table-tennis-picture-id946780844?k=20&m=946780844&s=170667a&w=0&h=CzZ92WnkohHJkM60QKjEwDHXILLp2X1n-NkfvmRi90Y=",
            id:3
        },

        {
            Titulo: "Alquiler de Espacios para Juegos Recreacionales",
            DescripcionBreve: "Para los que solo quieren divertirse jugando un rato",
            Descripcion: "Servicio de alquiler de mesas, raquetas y pelotas para uso recreativo en la sede del club. \n\n El valor de este servicio es de 50 lps./ 2hrs para miembros del club y de 100lps./ 2hrs para atletas no inscritos en el club. ",
            Precio: "L.100 por 2 horas",
            gallery:["https://media.istockphoto.com/photos/little-girl-playing-table-tennis-picture-id946780844?k=20&m=946780844&s=170667a&w=0&h=CzZ92WnkohHJkM60QKjEwDHXILLp2X1n-NkfvmRi90Y="],
            imagen:"https://media.istockphoto.com/photos/little-girl-playing-table-tennis-picture-id946780844?k=20&m=946780844&s=170667a&w=0&h=CzZ92WnkohHJkM60QKjEwDHXILLp2X1n-NkfvmRi90Y=",
            id:4
        },

        {
            Titulo: "Liga de Tenis de Mesa",
            DescripcionBreve: "Liga competitiva por equipos",
            Descripcion: "El club sula organiza 2 campeonatos de liga en el año en dos categorías. En la liga compiten jugadores de todo el país; de alto nivel. Esta competencia organizada por el club sula permite el fogueo nacional e internacional con jugadores de todo el país aun cuando no pertenezcan al club. \n\nEl formato de competencia de la liga garantiza el enfrentamiento de 14 juegos por equipo por jornada. El formato de competencia se realiza en aproximadamente 6 jornadas. \n\n El valor de participación en la liga es de 2000 lps.  por equipo, por evento que le da derecho a competir en el torneo por la duración de la competencia.  ",
            Precio: "L.2000 por persona",
            gallery:["https://media.istockphoto.com/photos/little-girl-playing-table-tennis-picture-id946780844?k=20&m=946780844&s=170667a&w=0&h=CzZ92WnkohHJkM60QKjEwDHXILLp2X1n-NkfvmRi90Y="],
            imagen:"https://media.istockphoto.com/photos/little-girl-playing-table-tennis-picture-id946780844?k=20&m=946780844&s=170667a&w=0&h=CzZ92WnkohHJkM60QKjEwDHXILLp2X1n-NkfvmRi90Y=",
            id:5
        },

        {
            Titulo: "Organizacion de Competencias",
            DescripcionBreve: "Servicio de organizacion y administracion de eventos deportivos",
            Descripcion: "El club sula ofrece la organización y administración de eventos y competencias en cualquier zona del país. El valor correspondiente depende del tamaño de la organización y los días de competencia.  \n\nLa organización incluye el equipo de juego\n\n- la división de áreas\n\n- marcadores\n\n- mesas de arbitro\n\n- formatos de competencia\n\n- desarrollo del evento\n\n- árbitros.",
            Precio: "Costo Variable",
            gallery:["https://media.istockphoto.com/photos/little-girl-playing-table-tennis-picture-id946780844?k=20&m=946780844&s=170667a&w=0&h=CzZ92WnkohHJkM60QKjEwDHXILLp2X1n-NkfvmRi90Y="],
            imagen:"https://media.istockphoto.com/photos/little-girl-playing-table-tennis-picture-id946780844?k=20&m=946780844&s=170667a&w=0&h=CzZ92WnkohHJkM60QKjEwDHXILLp2X1n-NkfvmRi90Y=",
            id:6
        },
    ]);

    


    const  [infoEvents,setInfoEvents] = useState("");

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
      }
      
        const db = firebase.firestore();
        let ev ;

    const getEventos = async () => {
        let obj;
        let list = []; 
        const querySnapshot = await db.collection("Eventos").get();
        querySnapshot.forEach((doc) => {
        obj = doc.data();
        obj.id = doc.id;
            list.push(obj);
        });
        setInfoEvents(list.sort(function (a, b) {  return new Date(b.Date) - new Date(a.Date);  }));
        ev= querySnapshot[0];
    };

    useEffect(()=>{
        getEventos();
        },[]);

    const slideBarElements = 3;

    const [slideBarEvents, setSlideBarEvents] = useState("");

    useEffect(()=>{
        const bridge = [];
        if(infoEvents){
            for (let i = slideBarElements -1; i>=0 ;i--){
                bridge.unshift(infoEvents[i]);
            }
            setSlideBarEvents(bridge);
        }
    },[infoEvents])
    
    return ( 
        <div>
            {!slideBarEvents &&
                <div>
                <Navbar light={{inicio: true, equipo: false, eventos: false, acercaDe: false, servicios: false, contactos: false }}/>
                <div className="home-container">
                    <div className="home-loading-container loading-container" >
                        <img src="/imgs/image_2022-10-20_143130654-modified.png" alt="" className="home-card-loading-img"/>
                        <p>Cargando...</p>
                    </div>
                    
                </div>
                </div>
            }
            {slideBarEvents && <div className="home">
                <Navbar light={{inicio: true, equipo: false, eventos: false, acercaDe: false, servicios: false, contactos: false }}/>
                <div className="home-container">
                    <SlideBar info={slideBarEvents}/>
                    <div className="home-about-us">
                        <img src="/Full-Team.jpeg" alt="" />
                        <div className="home-about-us-elements">
                            <h2>El CLub Sula</h2>
                            <p>Club Sula es un club de tenis de mesa recreativo y competitivo. Estamos radicados en la ciudad de San Pedro Sula con sede en el gimnasio del Instituto Primero de Mayo.</p>
                            <p>Nuestros objetivos son la educación deportiva, mejorar la clasificación de todos nuestros competidores, espíritu de equipo, buenos resultados para nuestros equipos inscritos en el campeonato en todas las categorías y aumentar el número de nuestros miembros.</p>
                            <a href="/Acerca_De"><button>Acerca De</button></a>
                        </div>    
                    </div>
                    <div className="home-services">
                        <h2 className="home-services-title">Algunos de Nuestros Servicios</h2>
                        <p className="centered-text">El club de tenis de mesa Sula imparte entrenamiento profesional y recreativo a los atletas de todas las edades y de todos los niveles. Participa en todos los eventos abiertos y federados de los torneos organizados por la federación nacional de tenis de mesa de honduras así como los eventos de la ITTF.</p>
                        <a href="/Servicios"><button>Ver Todos</button></a>
                        <div className="home-services-container">
                            {infoServicios.filter((service)=>(service.id<=3)).map((serInfo)=>(
                                <div className="home-service-card">
                                    <ServeciosPreview info={serInfo}/>
                                </div>
                            ))}
                        </div>
                    </div>
                    <PlayerSlideBar/>
                    <div className="home-about-us">
                        <div className="home-about-us-elements2">
                            <h2>Contactanos!</h2>
                            <p>Te invitamos a formar parte del club de tenis de mesa más grande de honduras. Si estas buscando un lugar para hacer deporte sano, seguro y de gran nivel has llegado al lugar correcto. Esperamos que te comuniques.</p>
                            <a href="/Contactos"><button>Contactos</button></a>
                        </div>
                        <img src="https://www.india.com/wp-content/uploads/2019/07/faBvHTkjnu.jpg" alt="" />
                    </div>
                </div>
                
            </div>}
        </div>
     );
}
 
export default Home;