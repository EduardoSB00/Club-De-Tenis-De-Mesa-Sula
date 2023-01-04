import { useParams } from "react-router-dom";
import { useState } from "react"; 
import Navbar from "./Navbar";

const ServiciosInfo = () => {

    const {id} = useParams();

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

    const serviceInfo = infoServicios.filter((servicio)=>(servicio.id==id))[0];
    console.log(serviceInfo);

    return ( 
        <div className="servicios-info">
            <Navbar light={{inicio: false, equipo: false, eventos: false, acercaDe: false, servicios: true, contactos: false }}/>
            <div className="team-container">
                <h1 className="team-title">{serviceInfo.Titulo}</h1>
                <hr />
                <div className="info-start">
                    <img src={serviceInfo.imagen} alt="" className="event-info-img" />
                    <div className="info-second">
                        <h2 className="event-info-subtitle">Descripcion del Servicio</h2>
                        
                        <p className="event-info-description" style={{whiteSpace:"pre-line"}}>{serviceInfo.Descripcion}</p>
                    </div>
                    
                </div>
                <div className="player-info-gallery">
                    <h2 className="gallery-title">GALLERIA</h2>
                    <div className="gallery-photo-container">

                        {
                            serviceInfo.gallery.map((picture)=>(
                                <img src={picture} alt="" className="gallery-img" />
                            ))
                        }
 
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default ServiciosInfo;