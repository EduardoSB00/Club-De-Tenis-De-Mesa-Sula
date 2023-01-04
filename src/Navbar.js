import { useState } from "react";
import Media from "react-media";

const Navbar = (props) => {

    const [visibleNav,setVisibleNav] = useState(false);



    function handleHamburger(){
        if(visibleNav === true){
            setVisibleNav(false);
        } else {
            setVisibleNav(true);
        }
    }

    return ( 
        <div className="navbar">
            <div className="navbar-container">

                <Media query="(min-width: 900px)">
                    <ul>
                        <li><a href="/">Inicio</a> {props.light.inicio&&<div className="nav-light"></div>} {!props.light.inicio&&<div className="nav-light2"></div>}</li>
                        <li><a href="/Equipo">Equipo</a> {props.light.equipo&&<div className="nav-light"></div>} {!props.light.equipo&&<div className="nav-light2"></div>}</li>
                        <li><a href="/Eventos">Eventos</a> {props.light.eventos&&<div className="nav-light"></div>} {!props.light.eventos&&<div className="nav-light2"></div>}</li>
                    </ul>
                </Media>
                
                <div className="logo-frame-container">
                    <a href="/">
                        <div className="logo-frame">
                            <img className="navbar-logo" src="/imgs/image_2022-10-20_143130654-modified.png"></img>
                        </div>
                    </a>
                </div>

                <Media query="(min-width: 900px)">
                    <ul>
                        <li><a href="/Acerca_De">Acerca De</a> {props.light.acercaDe&&<div className="nav-light"></div>} {!props.light.acercaDe&&<div className="nav-light2"></div>}</li>
                        <li><a href="/Servicios">Servicios</a> {props.light.servicios&&<div className="nav-light"></div>} {!props.light.servicios&&<div className="nav-light2"></div>}</li>
                        <li><a href="/Contactos">Contactos</a> {props.light.contactos&&<div className="nav-light"></div>} {!props.light.contactos&&<div className="nav-light2"></div>}</li>
                    </ul> 
                </Media>
               
                <Media query="(max-width: 899px)">
                    <i className="fa-solid fa-bars hamburger-icon" onClick={handleHamburger}></i>
                </Media>
                
            </div>

            <Media query="(max-width: 899px)">
                {visibleNav &&
                    <div className="side-container">
                        <ul>
                            <li>
                                <a href="/">
                                    <div className="side-nav-element">
                                        <i className="fa-solid fa-house side-nav-icon"></i>
                                        <span className="side-nav-element-text">Inicio</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="/Equipo">
                                    <div className="side-nav-element">
                                        <i className="fa-solid fa-table-tennis-paddle-ball side-nav-icon"></i>
                                        <span className="side-nav-element-text">Equipo</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="/Eventos">
                                    <div className="side-nav-element">
                                        <i className="fa-solid fa-calendar side-nav-icon"></i>
                                        <span className="side-nav-element-text">Eventos</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="/Acerca_De">
                                    <div className="side-nav-element">
                                        <i className="fa-solid fa-circle-info side-nav-icon"></i>
                                        <span className="side-nav-element-text">Acerca De</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="/Servicios">
                                    <div className="side-nav-element">
                                        <i className="fa-sharp fa-solid fa-trophy side-nav-icon"></i>
                                        <span className="side-nav-element-text">Servicios</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="/Contactos">
                                    <div className="side-nav-element">
                                        <i className="fa-solid fa-address-book side-nav-icon"></i>
                                        <span className="side-nav-element-text">Contactos</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                }
            </Media>

            
            
        </div>
     );
}
 
export default Navbar;