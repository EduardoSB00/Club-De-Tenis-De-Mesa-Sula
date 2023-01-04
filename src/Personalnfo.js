import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Navbar from "./Navbar";
import firebase from 'firebase/compat/app';
import firebaseConfig from "./Firebase/firebase";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getDownloadURL, getStorage, ref } from "firebase/storage";


const PersonalInfo = () => {
    const [infoPersonal,setInfoPersonal] = useState([]);

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
      }
      
        const db = firebase.firestore();
        let ev ;

    const getPersonal = async () => {
        let obj;
        let list = []; 
        const querySnapshot = await db.collection("Personal").get();
        querySnapshot.forEach((doc) => {
        obj = doc.data();
        obj.id = doc.id;
            list.push(obj);
        });
        setInfoPersonal(list);
        ev= querySnapshot[0];
    };

    useEffect(()=>{
        getPersonal();
        },[]);

    const {id} = useParams();

    const [playerInfo,setPlayerInfo] = useState(null);

    useEffect(()=>{
        setPlayerInfo(infoPersonal.filter((player)=>(player.id == id))[0]);
    },[infoPersonal]);

    
    useEffect(()=>{
        handelImage();
    },[playerInfo]);

   

    const [thumbnail, setThumbnail]=useState("");

    function handelImage(){
        const storage = getStorage();
        if(playerInfo){
            const newTitle =  playerInfo.completeName.replace(/ /g, '')
            const imageRef = ref(storage, "ImagenesPersonal/" + newTitle);
            getDownloadURL(imageRef).then((url)=>{
                setThumbnail(url);
            })
        }
       
        
    }



    return ( 
        <div className="player-info">
            <Navbar light={{inicio: false, equipo: false, eventos: false, acercaDe: true, servicios: false, contactos: false }}/>

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

            {(playerInfo && thumbnail)&& <div>
                <div className="player-photo-container">
                <img src={thumbnail} alt="" className="player-information-photo" />
                <img src="https://wallpaperaccess.com/full/12919.jpg" alt="" className="player-information-photo-background"/>

                <div className="information-name-container">
                    <p className="player-information-nick">{playerInfo.job}</p>
                    <p className="player-information-name">{playerInfo.name}</p>
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
                        <h3 className="info-card-title">INFORMACION PERSONAL</h3>
                        <hr />
                        <div className="info-card-information">
                            <div className="info-card-section">
                                <div className="info-holder">
                                    <h4>Nombre Completo</h4><p>{playerInfo.completeName}</p>
                                </div>
                                <div className="info-holder">
                                    <h4>Celular</h4><p>{playerInfo.phone}</p>
                                </div>
                                <div className="info-holder">
                                    <h4>Correo</h4><p>{playerInfo.email}</p>
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
            </div>
                </div>}

           
            
        </div>
     );
}
 
export default PersonalInfo;