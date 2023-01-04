import Navbar from "./Navbar";

const ErrorPage = () => {
    return ( 
        <div className="ErrorPage">
            <Navbar light={{inicio: false, equipo: false, eventos: false, acercaDe: false, servicios: false, contactos: false }}/>
            <div className="team-container" style={{backgroundColor:"white"}}>
                <div className="error-container">
                    <h1 className="team-title">Error 404 - Pagina No Encontrada</h1>
                    <h2 className="contact-subtitle">Lo sentimos esta pagina no se ha encontrado</h2>
                    <img src="https://static.vecteezy.com/system/resources/previews/003/800/347/original/road-worker-mascot-of-ping-pong-holding-drill-machine-vector.jpg" alt="" />
                </div>
                
            </div>
        </div>
     );
}
 
export default ErrorPage;