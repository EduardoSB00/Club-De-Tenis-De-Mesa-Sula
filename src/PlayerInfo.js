import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Navbar from "./Navbar";
import firebase from 'firebase/compat/app';
import firebaseConfig from "./Firebase/firebase";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getDownloadURL, getStorage, ref, listAll } from "firebase/storage";

const PlayerInfo = () => {

    const {id} = useParams();

    const [infoEquipo,setInfoEquipo] = useState([])
    const [infoGallery, setInfoGallery] = useState(null);

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
      }
      
        const db = firebase.firestore();
        let ev ;

    const getPlayers = async () => {
        let obj;
        let list = []; 
        const querySnapshot = await db.collection("Player").get();
        querySnapshot.forEach((doc) => {
        obj = doc.data();
        obj.id = doc.id;
            list.push(obj);
        });
        setInfoEquipo(list);
        ev= querySnapshot[0];
    };

    useEffect(()=>{
        getPlayers();
        },[]);


    const [playerInfo,setPlayerInfo] = useState(null);

    useEffect(()=>{
        setPlayerInfo(infoEquipo.filter((player)=>(player.id == id))[0]);
    },[infoEquipo]);
    
    useEffect(()=>{
        handelImage(); 
        handleGallery();
    },[playerInfo]);

    const [thumbnail, setThumbnail]=useState("");

    function handelImage(){
        const storage = getStorage();
        if(playerInfo){
            const newTitle =  playerInfo.completeName.replace(/ /g, '')
            const imageRef = ref(storage, "ImagenesPlayers/" + newTitle);
            getDownloadURL(imageRef).then((url)=>{
                setThumbnail(url);
            })
        }    
    }

    function handleVisibility(){
        if(visibleGallery){
            setVisibleGallery(false);
        }else{
            setVisibleGallery(true);
        }
    }


    function handleGallery(imageRef) {
      if(playerInfo){
      const storage = getStorage();
      const newTitle =  playerInfo.completeName.replace(/ /g, '');
      const listRef = ref(storage, "ImagenesPlayers/" + newTitle + "Gallery") ;
      const totalgallery = [];
  
      listAll(listRef)
        .then((res) => {
            
            res.items.forEach((itemRef) => {
                getDownloadURL(itemRef).then((url)=>{
                    totalgallery.push(url);  
                })
            });
            
            
        }).catch((error) => {
            alert("There was an error")
        })
        setInfoGallery(totalgallery);
        
    }}

    

    const [visibleGallery,setVisibleGallery] = useState(false);
 

    return (

        <div className="player-info">
            {!(playerInfo && thumbnail) &&
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


            {(playerInfo && thumbnail) && <div>
            <Navbar light={{inicio: false, equipo: true, eventos: false, acercaDe: false, servicios: false, contactos: false }}/>
            <div className="player-photo-container">
                    <img src={thumbnail} alt="" className="player-information-photo" />
                    <img src="/imgs/Player-Background.png" alt="" className="player-information-photo-background"/>

                    <div className="information-name-container">
                        <p className="player-information-nick">{playerInfo.nick}</p>
                        <p className="player-information-name">{playerInfo.name}</p>
                    </div>

                    <div className="player-name-big-super">
                        <p className="player-information-big-name">{playerInfo.nick}</p> 
                    </div>
                
            </div>
            
            <div className="player-info-container">
                <div className="player-description">
                    <div>
                         <p style={{whiteSpace:"pre-line"}}>{playerInfo.description}</p>
                    </div>

                </div>
                <div className="player-info-subcontainer">
                    <div className="player-information-card">
                        <h3 className="info-card-title">ESTADISTICAS</h3>
                        <hr />
                        <div className="stadistics-info-container">
                            <div className="stadistics-info-section">
                                <div className="stadistics-holder">
                                    <h4>Categoria</h4>
                                    <p>{playerInfo.category}</p>
                                </div>
                                <div className="stadistics-holder">
                                    <h4>Posicion de Ranking</h4>
                                    <p>{playerInfo.rank}</p>
                                </div>
                            </div>

                            <div className="stadistics-info-section">
                                <div className="stadistics-holder">
                                    <h4>Division de Edad</h4>
                                    <p>{playerInfo.ageDivision}</p>
                                </div>
                                <div className="stadistics-holder">
                                    <h4>Puntaje de Ranking</h4>
                                    <p>{playerInfo.pointsRanking}</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="player-information-card">
                        <h3 className="info-card-title">INFORMACION PERSONAL</h3>
                        <hr />
                        <div className="info-card-information">
                            <div className="info-card-section">
                                <div className="info-holder">
                                    <h4>Nombre Completo</h4><p>{playerInfo.completeName}</p>
                                </div>
                                <div className="info-holder">
                                    <h4>Altura</h4><p>{playerInfo.height}</p>
                                </div>
                                <div className="info-holder">
                                    <h4>Peso</h4><p>{playerInfo.weigth}</p>
                                </div>
                            </div>
                        
                             <div className="info-card-section">
                                
                                <div className="info-holder">
                                    <h4>Fecha de Nacimiento</h4><p>{playerInfo.birthDate}</p>
                                </div>
                                <div className="info-holder">
                                    <h4>Lugar de Nacimiento</h4><p>{playerInfo.birthPlace}</p>
                                </div>
                             </div>
                        </div>
                        
                       
                    </div>
                </div>

                <div style={{width: "100%", display:"flex", justifyContent: "center", marginTop: "100px"}}>
                    <button className = "gallery-button" onClick={()=>{handleVisibility()}}>Ver Galeria</button>
                </div>

                {visibleGallery && <div className="player-info-gallery">
                    <h2 className="gallery-title">GALLERIA</h2>
                    <div className="gallery-photo-container">
                            {infoGallery.map((image)=>(
                                <div>
                                    <img className="gallery-img" src={image} alt="" />
                                </div>
                            )) }
                    </div>
                </div>}

            </div>
             </div>
}
        </div>
     );
}
 
export default PlayerInfo;