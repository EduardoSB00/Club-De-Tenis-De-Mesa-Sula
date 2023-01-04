import { useState, useEffect } from "react";
import CartaDeJugador from "./CartaDeJugador";
import Navbar from "./Navbar";
import firebase from 'firebase/compat/app';
import firebaseConfig from "./Firebase/firebase";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const Equipo = () => {

    const [infoEquipo,setInfoEquipo] = useState([]);

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


    return ( 
        <div className="equipo">
            <Navbar light={{inicio: false, equipo: true, eventos: false, acercaDe: false, servicios: false, contactos: false }}/>
            <div className="team-container">
                <h1 className="team-title">EL EQUIPO - CLUB SULA</h1>
                <hr />
                <h2 className="cat-title">Primera Categoria</h2>
                <div className="players-container">
                    {infoEquipo.filter((player)=>(player.category === "Primera Categoria")).sort(function (a, b) {  return a.rank - b.rank;  }).map((playerInfo)=>(
                        <CartaDeJugador info={playerInfo} colorKey={"gold-card"} realColor={"rgb(203, 204, 140)"} key={playerInfo.name}/>
                    ))}
                </div>
                <hr />
                <h2 className="cat-title">Segunda Categoria</h2>
                <div className="players-container">
                    {infoEquipo.filter((player)=>(player.category === "Segunda Categoria")).sort(function (a, b) {  return a.rank - b.rank;  }).map((playerInfo)=>(
                        <CartaDeJugador info={playerInfo} colorKey={"silver-card"} realColor={"rgb(199, 199, 199)"} key={playerInfo.name}/>
                    ))}
                </div>
                <hr />
                <h2 className="cat-title">Tercera Categoria</h2>
                <div className="players-container">
                    {infoEquipo.filter((player)=>(player.category === "Tercera Categoria")).sort(function (a, b) {  return a.rank - b.rank;  }).map((playerInfo)=>(
                        <CartaDeJugador info={playerInfo} colorKey={"bronze-card"} realColor={"rgb(172, 143, 134)"} key={playerInfo.name}/>
                    ))}
                </div>
                <hr />
                <h2 className="cat-title">Cuarta Categoria</h2>
                <div className="players-container">
                    {infoEquipo.filter((player)=>(player.category === "Cuarta Categoria")).sort(function (a, b) {  return a.rank - b.rank;  }).map((playerInfo)=>(
                        <CartaDeJugador info={playerInfo} colorKey={"blue-card"} realColor={"rgba(2,74,172,255)"} key={playerInfo.name}/>
                    ))}
                </div>
                <hr />
                <h2 className="cat-title">Quinta Categoria</h2>
                <div className="players-container">
                    {infoEquipo.filter((player)=>(player.category === "Quinta Categoria")).sort(function (a, b) {  return a.rank - b.rank;  }).map((playerInfo)=>(
                        <CartaDeJugador info={playerInfo} colorKey={"green-card"} realColor={"rgba(86,178,77,255)"} key={playerInfo.name}/>
                    ))}
                </div>
                <hr />
                <h2 className="cat-title">Pequeños Campeones</h2>
                <div className="players-container">
                    {infoEquipo.filter((player)=>(player.category === "Pequeños Campeones")).sort(function (a, b) {  return a.rank - b.rank;  }).map((playerInfo)=>(
                        <CartaDeJugador info={playerInfo} colorKey={"yellow-card"} realColor={"rgba(241,196,15,255)"} key={playerInfo.name}/>
                    ))}
                </div>
            </div>
            
        </div>
     );
}
 
export default Equipo;