import { useEffect, useState } from "react";
import CartaDeJugador from "./CartaDeJugador";
import firebase from 'firebase/compat/app';
import firebaseConfig from "./Firebase/firebase";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const PlayerSlideBar = () => {
    const [currentPosition, setCurrentPosition] = useState("0vw");
    const [infoEquipo,setInfoEquipo] = useState("");

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
        setInfoEquipo(list.sort(function (a, b) {  return a.rank - b.rank;  }));
        
        ev= querySnapshot[0];
    };

    useEffect(()=>{
        getPlayers();
        
        },[]);

        const [realInfo,setRealInfo] = useState([]);
        useEffect(()=>{
         const bridge = [];   
            if(infoEquipo){
                for (let i = 0; i<10; i++){
                    if(infoEquipo[i]){
                        bridge.push(infoEquipo[i]);
                    }
                    
                }
                setRealInfo(bridge);
                
            }
        },[infoEquipo])
        

    return ( 
        <div>
            {realInfo && <div className="SlideBar2">
                <h2 className="home-services-title">El Equipo - TOP 10</h2>
                <p className="centered-text">Este grupo formado por los 10 atletas mejores ranqueados a nivel nacional representan los jugadores con mayor nivel competitivo dentro del Club. Con compromiso, pasión y puntual entrenamiento todos pueden llegar a alcanzar iguales o mejores posiciones en el Ranking.</p>
                <a href="/Equipo"><button className="player-slidebar-button">Ver Todos</button></a>
                <div className="home-players-container" id="PlayerSlider" style={{left: currentPosition}} >
                {realInfo.filter((player)=>(player.category === "Primera Categoria")).sort(function (a, b) {  return a.rank - b.rank;  }).map((playerInfo)=>(
                    <CartaDeJugador info={playerInfo} colorKey={"gold-card"} realColor={"rgb(203, 204, 140)"} key={playerInfo.id}/>
                ))}
                 {realInfo.filter((player)=>(player.category === "Segunda Categoria")).sort(function (a, b) {  return a.rank - b.rank;  }).map((playerInfo)=>(
                    <CartaDeJugador info={playerInfo} colorKey={"silver-card"} realColor={"rgb(199, 199, 199)"} key={playerInfo.id}/>
                ))}
                {realInfo.filter((player)=>(player.category === "Tercera Categoria")).sort(function (a, b) {  return a.rank - b.rank;  }).map((playerInfo)=>(
                    <CartaDeJugador info={playerInfo} colorKey={"bronze-card"} realColor={"rgb(172, 143, 134)"} key={playerInfo.id}/>
                ))}    
                {realInfo.filter((player)=>(player.category === "Cuarta Categoria")).sort(function (a, b) {  return a.rank - b.rank;  }).map((playerInfo)=>(
                    <CartaDeJugador info={playerInfo} colorKey={"blue-card"} realColor={"rgba(2,74,172,255)"} key={playerInfo.id}/>
                ))}  
                {realInfo.filter((player)=>(player.category === "Quinta Categoria")).sort(function (a, b) {  return a.rank - b.rank;  }).map((playerInfo)=>(
                    <CartaDeJugador info={playerInfo} colorKey={"green-card"} realColor={"rgba(86,178,77,255)"} key={playerInfo.id}/>
                ))}     
                {realInfo.filter((player)=>(player.category === "Pequeños Campeones")).sort(function (a, b) {  return a.rank - b.rank;  }).map((playerInfo)=>(
                    <CartaDeJugador info={playerInfo} colorKey={"yellow-card"} realColor={"rgba(241,196,15,255)"} key={playerInfo.id}/>
                ))}    
                </div>
            </div>}
            
        </div>
     );
}
 
export default PlayerSlideBar;