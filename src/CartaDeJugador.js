import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { useState } from "react";

const CartaDeJugador = (props) => {

    const sideClass = "player-card-side "+props.colorKey;
    const buttonLink = "/Equipo/"+props.info.id
    const storage = getStorage();
    const newTitle =  props.info.completeName.replace(/ /g, '')
    const imageRef = ref(storage, "ImagenesPlayers/" + newTitle);

    const [thumnail, setThumbnail]=useState("");

    getDownloadURL(imageRef).then((url)=>{
            setThumbnail(url);
        })

    return ( 
        <div>
        {!thumnail &&
            <div className="player-card-loading-container">
                <img src="/imgs/image_2022-10-20_143130654-modified.png" alt="" className="player-card-loading-img"/>
                <p>Cargando...</p>
            </div>        
        }    

        {thumnail&&<div className="carta-de-jugador">
                <div className="player-card-container">
                    
                    <div className="player-card-top">
                        <img className="player-card-img" src={thumnail} loading="lazy"/>
                        <img src="/imgs/Player-Background.png" alt="" className="player-card-img-background" />
                        <div className={sideClass}></div>
                    </div>

                    <div className="player-card-bottom">
                        <a href={buttonLink}><div className="black-card-gradient"></div></a>
                        <p className="player-card-nick">{props.info.nick}</p>
                        <p className="player-card-name" style={{color:props.realColor}}>{props.info.name}</p>
                        <div className="card-side-info">
                            <i className="fa-solid fa-table-tennis-paddle-ball card-icon"></i>
                            <p> --- Ranking: <span>{props.info.rank}</span> ---</p>
                            <img className="card-logo" src="/imgs/image_2022-10-20_143130654-modified.png"></img>
                        </div>
                        
                        <div className="card-button-container">
                            <a href={buttonLink}><button className="card-button" style={{borderColor: props.realColor}}>Más Información</button></a>
                        </div>
                        
                    </div>   
                    
                </div>
            </div>}
        </div>
     );
}
 
export default CartaDeJugador;