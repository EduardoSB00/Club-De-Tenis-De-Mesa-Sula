
import { useState } from "react";
import Navbar from "./Navbar";

const AcercaDe = () => {

    const [prueba, setPrueba] = useState(null);


    return ( 
        <div className="AcercaDe">
            <Navbar light={{inicio: false, equipo: false, eventos: false, acercaDe: true, servicios: false, contactos: false }}/>
            <div className="acerca-de-container">
                <div className="acerca-de-subcontainer">
                    <div className="acerca-de-subcontainer-2">
                        
                        <div className="acerca-de-info">
                            <h1 className="team-title">ACERCA DEL CLUB DE TENIS DE MESA SULA</h1>
                            <hr />
                            <h2>¿Quienes Somos?</h2>
                            <p>Club Sula es un Club de Tenis de mesa que promueve la practica tanto recreativa como de alto nivel competitivo del Tenis de Mesa en la Zona metropolitana de San Pedro Sula.</p>
                            <p>Estamos convenientemente ubicados en el Gimnasio dei Instituto Primero de Mayo ubicado en la colonia FESITRAN de San Pedro Sula.</p>
                            <p>Contamos con moderna infraestructuray equipamiento  para la practica del deporte según los estándares y lineamientos de la Federacion Internacional de Tenis de Mesa ITTF  y estamos en constante adquisición de equipos profesionales que nos apoyen a lograr alcanzar nuestros objetivos</p>
                            <p>Tenemos a la disposición entrenadores graduados en Lic. en Educación Física con especialidad en Tenis de Mesa graduados en Cuba.</p>
                            <p>Servicio de entrenamiento en la academia de Tenis de mesa  para principiantes, avanzados y niños en Horarios de 6:00 pm a 9:00 pm.</p>
                            <p>Admistramos la primera y Unica Liga de Tenis de Mesa en Honduras con participación constante de fogueos con jugadores nacionales e internacionales  pertenecientes a mas de 12 equipos y tenemos participación  competitiva en las 6 categorias de los torneos de Ranking nacional</p>
                            <p>El club cuenta con mas de 70 miembros activos de los cuales muchos forman parte de las selecciones nacionale U13, U15, U18, mayor y Senior.</p>
                            <p>Organizamos y somos sedes de las principales justas deportivas  de los campeonatos nacionales y en 2023 internacionale</p>
                        
                        </div>

                        <h3 className="acerca-de-titulo-botones">INFORMACION IMPORTANTE</h3>

                        <div style={{width: "100%",display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
                            <a href="/Acerca_De/Estatutos"><button>ESTATUTOS</button></a>
                            <a href="/Acerca_De/Personal"><button>PERSONAL</button></a>
                            <a href="/Equipo"><button>EQUIPO</button></a>
                            <a href="/Contactos"><button>CONTACTOS</button></a>
                            <a href="/Servicios"><button>SERVICIOS</button></a>
                        </div>
                    
                        
                    </div>

                    

                    <h2>Mision</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae obcaecati similique accusamus a animi quasi totam, explicabo cumque, autem non laudantium distinctio nisi eligendi vero quia! Inventore repellendus unde et?</p>
                    <h2>Vision</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, sequi qui? Reprehenderit dolorem at quae alias iusto delectus deserunt eligendi expedita eos, repellat dolore sunt officia? Voluptatem in perspiciatis doloribus.</p>
                    <h2>Nuestra Historia</h2>
                    <p>En el año 2020 a Raíz de la Pandemia que imposibilito el uso de las instalaciones deportivas del país ante la prohibición del gobierno en turno, un grupo de personas amantes de nuestro hermoso deporte se reunió en San Pedro Sula para rediseñar la estructura de lo que era el Club GEDES en la división Tenis de Mesa con la finalidad de mantener viva la práctica de este deporte en la ciudad.  Se inicia en ese año la continuidad de las prácticas deportivas en un local comercial de la ciudad durante 6 meses, Posteriormente En diciembre del año 2021 se elige lo que se convertiría en la Primera Junta Directiva electa por sus miembros para administrar lo que sería el Club de Tenis de Mesa Sula. La nueva Junta Directiva inicia inmediatamente una ardua labor para asegurar un local que cumpla los estándares exigidos por la práctica de alto nivel de este deporte y es así como en marzo del 2022 con la Ayuda de las autoridades del Instituto1ro de mayo se adopta como Sede oficial del club el Gimnasio de esta institución haciendo uso de las instalaciones en un horario de 6:00 PM a 9:00 PM.</p>
                    <p>Ha sido 1 año el que ha pasado en nuestra historia y lo que ha llegado a ser y es ahora EL Club de Tenis de Mesa Sula, una Organización en constante evolución que ha respetado los principios y objetivos instaurados en su fundación y ha continuado creciendo en todos los aspectos para beneficio del desarrollo de nuestro deporte en el país.</p>
                    <p>Nos sentimos altamente orgullosos de nuestra Organización y sus enormes logros, que a través de estos 2 años se han venido consiguiendo. Reciban nuestro más preciado reconocimiento estas personas que tuvieron esa visión de fundar El Club de Tenis de Mesa, Sula.</p>
                
                </div>      
            </div>
        </div>
     );
}
 
export default AcercaDe;