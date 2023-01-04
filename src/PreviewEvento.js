import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { useState } from "react";

const PreviewEvento = (props) => {

    const route = "/Eventos/"+props.info.id;
    const storage = getStorage();
    const newTitle =  props.info.Title.replace(/ /g, '')
    const imageRef = ref(storage, "ImagenesEventos/" + newTitle);

    const [thumbnail, setThumbnail]=useState("");

    getDownloadURL(imageRef).then((url)=>{
            setThumbnail(url);

        }) 

    return ( 
        <div className="PreviewEvento">
            {!thumbnail && 
                <div className="event-preview-loading-container">
                    <img src="/imgs/image_2022-10-20_143130654-modified.png" alt="" className="player-card-loading-img"/>
                    <p>Cargando...</p>
                </div>
            }
            {thumbnail && <div className="preview-event-container">
                <a href={route}><img src={thumbnail} alt="" className="event-preview-img" loading="lazy"/></a>
                <div className="preview-event-information">
                    <a href={route} className="preview-event-title">{props.info.Title}</a>
                    <h3 className="preview-event-subtitle">{props.info.Subtitle}</h3>
                    <p className="preview-event-date">Publicado en: {props.info.Date}</p>
                    <p className="preview-event-description">{props.info.Description}</p>   
                </div >
            </div>}
            
        </div>
     );
}
 
export default PreviewEvento;