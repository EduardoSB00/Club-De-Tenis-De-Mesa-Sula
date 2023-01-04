import { useState, useEffect } from "react";
import CartaDePersonal from "./CartadePersonal";
import Navbar from "./Navbar";
import firebase from 'firebase/compat/app';
import firebaseConfig from "./Firebase/firebase";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const Personal = () => {

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



    return ( 
        <div className="personal">
            <Navbar light={{inicio: false, equipo: false, eventos: false, acercaDe: true, servicios: false, contactos: false }}/>
            <div className="team-container">
                <h1 className="team-title">PERSONAL</h1>
                <hr />
                <div className="personal-container">
                    <h2>Junta Directiva</h2>
                    <div className="personal-subcontainer">
                        {infoPersonal.filter((person)=>(person.department === "Junta Directiva")).map((personInfo)=>(
                            <CartaDePersonal info={personInfo} key={personInfo.name}/>
                        ))}
                    </div>
                   
                    <hr />
                    <h2>Entrenador</h2>

                    <div className="personal-subcontainer">
                        {infoPersonal.filter((person)=>(person.department === "Entrenador")).map((personInfo)=>(
                            <CartaDePersonal info={personInfo} key={personInfo.name}/>
                        ))}
                    </div>
                    
                </div>
            </div>
        </div>
     );
}
 
export default Personal
