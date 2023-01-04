import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import firebase from 'firebase/compat/app';
import firebaseConfig from "./Firebase/firebase";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getDownloadURL, getStorage, ref } from "firebase/storage";



const EventInfo = () => {

    const  [infoEvents,setInfoEvents] = useState([]);

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
      }
      
        const db = firebase.firestore();
        let ev ;

    const getPlayers = async () => {
        let obj;
        let list = []; 
        const querySnapshot = await db.collection("Eventos").get();
        querySnapshot.forEach((doc) => {
        obj = doc.data();
        obj.id = doc.id;
            list.push(obj);
        });
        setInfoEvents(list);
        ev= querySnapshot[0];
    };

    useEffect(()=>{
        getPlayers();
        },[]);

    const {id} = useParams();

    const [eventData,setEventData] = useState(null);

    useEffect(()=>{
        setEventData(infoEvents.filter((player)=>(player.id == id))[0]);
    },[infoEvents]);

    
    useEffect(()=>{
        handelImage();
    },[eventData]);

   

    const [thumbnail, setThumbnail]=useState("");

    function handelImage(){
        const storage = getStorage();
        if(eventData){
            const newTitle =  eventData.Title.replace(/ /g, '')
            const imageRef = ref(storage, "ImagenesEventos/" + newTitle);
            getDownloadURL(imageRef).then((url)=>{
                setThumbnail(url);
            })
        }
       
        
    }

    return ( 
        <div className="EventInfo">
            <Navbar light={{inicio: false, equipo: false, eventos: true, acercaDe: false, servicios: false, contactos: false }}/>
            
            {!(eventData && thumbnail) &&
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
            
            {(eventData && thumbnail ) &&
                <div>
                <div className="event-container">
                    <h1 className="events-title">{eventData.Title}</h1>
                    <hr />
                    <div className="info-start">
                        <img src={thumbnail} alt="" className="event-info-img"/>
                        <div className="info-second">
                            <h2 className="event-info-subtitle">{eventData.Subtitle}</h2>
                            <p className="preview-event-date">Publicado en: {eventData.Date}</p>
                            <p style={{whiteSpace:"pre-line"}} className="event-info-description">{eventData.Description}</p>
                        </div>
                    
                    </div>
                
                </div>
            </div>
            }
           
        </div>
     );
}
 
export default EventInfo;
<div className="EventInfo">

</div>