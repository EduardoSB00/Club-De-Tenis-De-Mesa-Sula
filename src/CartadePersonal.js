import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { useState } from "react";

const CartaDePersonal = (props) => {
    const sideClass = "player-card-side "+ "grey-card";
    const buttonLink = "/Acerca_De/Personal/"+props.info.id
    const storage = getStorage();
    const newTitle =  props.info.completeName.replace(/ /g, '')
    const imageRef = ref(storage, "ImagenesPersonal/" + newTitle);

    const [thumbnail, setThumbnail]=useState("");

    getDownloadURL(imageRef).then((url)=>{
            setThumbnail(url);
        })


    return ( 
        <div>
            {!thumbnail &&
                <div className="player-card-loading-container">
                    <img src="/imgs/image_2022-10-20_143130654-modified.png" alt="" className="player-card-loading-img"/>
                    <p>Cargando...</p>
                </div>        
            }    

            {thumbnail && <div className="carta-de-jugador">
                <div className="player-card-container">
                    <div className="player-card-top">
                        <img className="player-card-img" src={thumbnail}/>
                        <img src="https://wallpaperaccess.com/full/12919.jpg" alt="" className="player-card-img-background" />

                        <div className={sideClass}></div>
                    </div>

                    <div className="player-card-bottom">
                        <a href={buttonLink}><div className="black-card-gradient"></div></a>
                        <p className="player-card-nick">{props.info.job}</p>
                        <p className="player-card-name" style={{color:"rgb(184, 184, 184)"}}>{props.info.name}</p>
                        <div className="card-side-info">
                            <i style={{color:"rgb(184, 184, 184)"}} className="fa-solid fa-table-tennis-paddle-ball card-icon"></i>
                            <p style={{color:"rgb(184, 184, 184)"}}> --- <span>{props.info.job}</span> ---</p>
                            <img className="card-logo" src="/imgs/image_2022-10-20_143130654-modified.png"></img>
                        </div>
                        
                        <div className="card-button-container">
                            <a href={buttonLink}><button className="card-button" style={{borderColor: "rgb(184, 184, 184)"}}>Más Información</button></a>
                        </div>
                        
                    </div>   
                </div>
            </div>}
        </div>
     );
}
 
export default CartaDePersonal;