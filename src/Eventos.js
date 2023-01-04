import PreviewEvento from "./PreviewEvento";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import firebase from 'firebase/compat/app';
import firebaseConfig from "./Firebase/firebase";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const Eventos = () => {

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


    return ( 
        <div className="eventos">
            <Navbar light={{inicio: false, equipo: false, eventos: true, acercaDe: false, servicios: false, contactos: false }}/>
            {infoEvents&&<div>
                <div className="event-container">
                    <h1 className="events-title">EVENTOS</h1>
                    <hr />
                    <div className="event-items">
                        {infoEvents.sort(function (a, b) {  return new Date(b.Date) - new Date(a.Date);  }).map((event)=>(
                            <PreviewEvento info={event}/>
                        ))}
                    </div>
                </div>
            </div>}
            
        </div>
     );
} 
 
export default Eventos;