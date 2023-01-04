import Navbar from "./Navbar";
import { useState } from "react";
import { useEffect } from "react";
import firebase from 'firebase/compat/app';
import firebaseConfig from "./Firebase/firebase";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { doc, deleteDoc } from "firebase/firestore";
import {getStorage} from "firebase/storage"
import {ref, uploadBytes, deleteObject} from "firebase/storage"

const GlobalEdit = () => {

    /*Password State Variables */

    const [passwordState,setPasswordState] = useState(true);
    const [passValue,setPassValue] = useState("")

    /*Preset values to change container size */

    const visibleState1 = ["500px", "hidden", "40px 4vw"];
    const visibleState2 = ["200px", "hidden", "40px 4vw"];
    const visibleState3 = ["850px", "hidden", "40px 4vw"];
    const visibleState4 = ["750px", "hidden", "40px 4vw"];
    const visibleState5 = ["1200px", "hidden", "40px 4vw"];
    const invisibleState = ["0px", "hidden", "0"];

    /*State variables that change container size*/

    const [addPlayer,setAddPlayer] = useState(["0px","hidden","0"]);
    const [editPlayer,setEditPlayer] = useState(["0px","hidden","0"]);
    const [erasePlayer,setErasePlayer] = useState(["0px","hidden","0"]);

    const [addPersonal,setAddPersonal] = useState(["0px","hidden","0"]);
    const [editPersonal,setEditPersonal] = useState(["0px","hidden","0"]);
    const [erasePersonal,setErasePersonal] = useState(["0px","hidden","0"]);

    const [addEvent,setAddEvent] = useState(["0px","hidden","0"]);
    const [editEvent,setEditEvent] = useState(["0px","hidden","0"]);
    const [eraseEvent,setEraseEvent] = useState(["0px","hidden","0"]);

    const [playerState,setPlayerState] = useState("");
    const [personalState,setPersonalState] = useState("");
    const [eventState,setEventState] = useState("");

    /*Player Edit Input States */

    const [playerName,setPlayerName] = useState("");
    const [playerPicture,setPlayerPicture] = useState("");
    const [playerNick, setPlayerNick] = useState("");
    const [playerFullName, setPlayerFullName] = useState("");
    const [playerHeight,setPlayerHeight] =useState("");
    const [playerWeight,setPlayerWeight] =useState("");
    const [playerPlace,setPlayerPlace] = useState("");
    const [playerDate,setPlayerDate] = useState("");
    const [playerRank, setPlayerRank] = useState(0);
    const [playerPoints,setPlayerPoints] = useState(0);
    const [playerCategory,setPlayerCategory] = useState("");
    const [playerAgeDiv,setPlayerAgeDiv] = useState("");
    const [playerDescription,setPlayerDescription] = useState("");
    const [selectedPlayer,setSelectedPlayer] = useState("")


    /*Personal Edit Input States */

    const [personalName,setPersonalName] = useState("");
    const [personalPicture,setPersonalPicture] = useState("");
    const [personalJob, setPersonalJob] = useState("");
    const [personalFullName, setPersonalFullName] = useState("");
    const [personalEmail,setPersonalEmail] =useState("");
    const [personalPhone,setPersonalPhone] =useState("");
    const [personalPlace,setPersonalPlace] = useState("");
    const [personalDate,setPersonalDate] = useState("");
    const [personalDepartment, setPersonalDepartment] = useState("");
    const [personalDescription,setPersonalDescription] = useState("");
    const [selectedPersonal,setSelectedPersonal] = useState("")

    /*Event Edit Input States */

    const [eventTitle,setEventTitle] = useState("");
    const [eventSubtitle,setEventSubtitle] = useState("");
    const [eventImage,setEventImage] = useState(null);
    const [eventDate,setEventDate] = useState("");
    const [eventDescription,setEventDescription] = useState(""); 
    const [selectedEvent,setSelectedEvent] = useState("")

    const [infoEquipo,setInfoEquipo] = useState([]);
    const [infoPersonal,setInfoPersonal] = useState([]);
    const  [infoEvents,setInfoEvents] = useState([]);

    const singleEventInfo = infoEvents.filter((event)=>(event.Title === selectedEvent))[0];
    const singlePlayerInfo = infoEquipo.filter((jugador)=>(jugador.name === selectedPlayer))[0];
    const singlePersonalInfo = infoPersonal.filter((person)=>(person.name === selectedPersonal))[0];

    function ErasePlayerStates(){
        setPlayerName("");
        setPlayerPicture("");
        setPlayerNick("");
        setPlayerFullName("");
        setPlayerHeight("");
        setPlayerWeight("");
        setPlayerPlace("");
        setPlayerDate("");
        setPlayerRank(0);
        setPlayerPoints(0);
        setPlayerCategory("");
        setPlayerAgeDiv("");
        setPlayerDescription("");
        setSelectedPlayer("");
        setGalleryName("");
        setGalleryPicture("");
    }

    function EraseEventStates(){
        setEventTitle("");
        setEventSubtitle("");
        setEventImage("");
        setEventDate("");
        setEventDescription("");
        setSelectedEvent(""); 
    }

    function ErasePersonalStates(){
        setPersonalName("");
        setPersonalPicture("");
        setPersonalJob("");
        setPersonalFullName("");
        setPersonalEmail("");
        setPersonalPhone("");
        setPersonalPlace("");
        setPersonalDate("");
        setPersonalDepartment("");
        setPersonalDescription("");
        setSelectedPersonal("");
    }

    function EraseGalleryStates(){
        setGalleryName("");
        setGalleryPicture("");
    }

    function EventDisplayInfo(){
        if(singleEventInfo){
            setEventTitle(singleEventInfo.Title);
            setEventSubtitle(singleEventInfo.Subtitle);
            setEventDate(singleEventInfo.Date);    
            setEventDescription(singleEventInfo.Description);
         }
        }

    function PlayerDisplayInfo(){
        if(singlePlayerInfo){
            setPlayerName(singlePlayerInfo.name);
            setPlayerNick(singlePlayerInfo.nick);
            setPlayerFullName(singlePlayerInfo.completeName);
            setPlayerHeight(singlePlayerInfo.height);
            setPlayerWeight(singlePlayerInfo.weigth);
            setPlayerPlace(singlePlayerInfo.birthPlace);
            setPlayerDate(singlePlayerInfo.birthDate);
            setPlayerRank(singlePlayerInfo.rank);
            setPlayerPoints(singlePlayerInfo.pointsRanking);
            setPlayerCategory(singlePlayerInfo.category);
            setPlayerAgeDiv(singlePlayerInfo.ageDivision);
            setPlayerDescription(singlePlayerInfo.description);

         }
        }

    function PersonalDisplayInfo(){
        if(singlePersonalInfo){
            setPersonalName(singlePersonalInfo.name);
            setPersonalJob(singlePersonalInfo.job);
            setPersonalFullName(singlePersonalInfo.completeName);
            setPersonalEmail(singlePersonalInfo.email);
            setPersonalPhone(singlePersonalInfo.phone);
            setPersonalPlace(singlePersonalInfo.birthPlace);
            setPersonalDate(singlePersonalInfo.birthDate);
            setPersonalDepartment(singlePersonalInfo.department);
            setPersonalDescription(singlePersonalInfo.description);
         }
        }    

        
       
    useEffect(PersonalDisplayInfo,[selectedPersonal]);
    useEffect(PlayerDisplayInfo,[selectedPlayer]);
    useEffect(EventDisplayInfo,[selectedEvent]);

    const [galleryPicture,setGalleryPicture] = useState("");
    const [galleryName, setGalleryName] = useState("");

    function openFunc(action,add,edit,erase,state,setState,vis){
        if(action === "add"){
            if(state === "add"){
                add(invisibleState);
                setState("");
            }else{
                add(vis);
                edit(invisibleState);
                erase(invisibleState);
                setState("add");
            }
        }

        else if(action === "erase"){
            if(state === "erase"){
                erase(invisibleState);
                setState("");
            }else{
                add(invisibleState);
                edit(invisibleState);
                erase(vis);
                setState("erase");
            }
        }

        else if(action === "edit"){
            if(state === "edit"){
                edit(invisibleState);
                setState("");
            }else{
                add(invisibleState);
                edit(vis);
                erase(invisibleState);
                setState("edit");
            }
        }

    }

    function handlePasswordSubmit(event){
        event.preventDefault();
        console.log(passValue);

        if(passValue === "ClubSula2022"){
            setPasswordState(false);
        }
    }

/*Firebase General Settings */

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  
    const db = firebase.firestore();
    let ev ;

/*Firebase Event Functions */
    const getEventos = async () => {
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

      const deleteEventos = async () => {
       await deleteDoc(doc(db, "Eventos", singleEventInfo.id));
      };

      const updateEventos = async () => {
        const obj = {Title:eventTitle , Subtitle :eventSubtitle , Date : eventDate , Description :eventDescription}
        db.collection("Eventos").doc(singleEventInfo.id).update({Title:eventTitle , Subtitle :eventSubtitle , Date : eventDate , Description :eventDescription});
       };
      

    useEffect(()=>{
     getEventos();
    },[]);

    const uploadEventos = async () => {
        const obj = { Title: eventTitle, Subtitle: eventSubtitle, Date: eventDate, Description: eventDescription, Thumbnail: "https://firebasestorage.googleapis.com/v0/b/club-de-tenis-de-mesa-sula.appspot.com/o/ImagenesEventos%2FMomShopsFlowes?alt=media"};
        const dbRef = await db.collection("Eventos").add(obj);
    };

    function handleEventDelete(event){
        event.preventDefault();
        deleteEventos();
        EraseEventStates();
        getEventos();
        deleteEventImage();
    }

    function handleEventUpload(event){
        event.preventDefault();
        uploadEventos();
        EraseEventStates();
        getEventos();
        uploadEventImage();
    }

    function handleEventUpdate(event){
        uploadEventImage();
        event.preventDefault();
        updateEventos();
        EraseEventStates();
        getEventos();
        
    }

/*Firebase Players Functions */
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

    const deletePlayers = async () => {
        await deleteDoc(doc(db, "Player", singlePlayerInfo.id));
    };

    const updatePlayers = async () => {
        const obj = {ageDivision: playerAgeDiv, birthDate: playerDate, birthPlace: playerPlace, category: playerCategory, completeName: playerFullName, description: playerDescription, gallery: ["image url 1", "image url 2"], height: playerHeight, name: playerName, nick: playerNick, pointsRanking: playerPoints, profileImage: "image url", rank: playerRank, weigth: playerWeight};
        db.collection("Player").doc(singlePlayerInfo.id).update({ageDivision: playerAgeDiv, birthDate: playerDate, birthPlace: playerPlace, category: playerCategory, completeName: playerFullName, description: playerDescription, gallery: ["image url 1", "image url 2"], height: playerHeight, name: playerName, nick: playerNick, pointsRanking: playerPoints, profileImage: "image url", rank: playerRank, weigth: playerWeight});
    };
    

    useEffect(()=>{
    getPlayers();
    },[]);

    const uploadPlayers = async () => {
        const obj = {ageDivision: playerAgeDiv, birthDate: playerDate, birthPlace: playerPlace, category: playerCategory, completeName: playerFullName, description: playerDescription, gallery: ["image url 1", "image url 2"], height: playerHeight, name: playerName, nick: playerNick, pointsRanking: playerPoints, profileImage: "image url", rank: playerRank, weigth: playerWeight};
        const dbRef = await db.collection("Player").add(obj);
    };

    function handlePlayerDelete(event){
        event.preventDefault();
        deletePlayers();
        ErasePlayerStates();
        getPlayers();
        deletePlayerImage();
    }

    function handlePlayerUpload(event){
        event.preventDefault();
        uploadPlayers();
        ErasePlayerStates();
        getPlayers();
        uploadPlayerImage();
    }

    function handlePlayerUpdate(event){
        uploadPlayerImage();
        event.preventDefault();
        updatePlayers();
        ErasePlayerStates();
        getPlayers();
    }  

    function handleGalleryUpload(event){
        event.preventDefault();
        uploadGallery();
        EraseGalleryStates();
    }
    
    /*Firebase Personal Functions */
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

    const deletePersonal = async () => {
        await deleteDoc(doc(db, "Personal", singlePersonalInfo.id));
    };

    const updatePersonal = async () => {
        const obj = {birthDate: personalDate, birthPlace: personalPlace, completeName: personalFullName, department: personalDepartment, description:personalDescription, email:personalEmail, job: personalJob, name: personalName, phone: personalPhone, profileImage: "image url"};
        db.collection("Personal").doc(singlePersonalInfo.id).update({birthDate: personalDate, birthPlace: personalPlace, completeName: personalFullName, department: personalDepartment, description:personalDescription, email:personalEmail, job: personalJob, name: personalName, phone: personalPhone, profileImage: "image url"});
    };
    

    useEffect(()=>{
    getPersonal();
    },[]);

    const uploadPersonal = async () => {
        const obj = {birthDate: personalDate, birthPlace: personalPlace, completeName: personalFullName, department: personalDepartment, description:personalDescription, email:personalEmail, job: personalJob, name: personalName, phone: personalPhone, profileImage: "image url"};
        const dbRef = await db.collection("Personal").add(obj);
    };

    function handlePersonalDelete(event){
        event.preventDefault();
        deletePersonal();
        ErasePersonalStates();
        getPersonal();
        deletePersonalImage();
    }

    function handlePersonalUpload(event){
        event.preventDefault();
        uploadPersonal();
        ErasePersonalStates();
        getPersonal();
        uploadPersonalImage();
    }

    function handlePersonalUpdate(event){
        uploadPersonalImage();
        event.preventDefault();
        updatePersonal();
        ErasePersonalStates();
        getPersonal();
    }    

    /*Event Image Functions */

    const storage = getStorage();
    

    function uploadEventImage(){
        if(eventImage == null) return;
        const newTitle =  eventTitle.replace(/ /g, '')
        const imageRef = ref(storage, "ImagenesEventos/" + newTitle);
        if(eventImage){
            uploadBytes(imageRef, eventImage).then(()=>{
                alert("image uploaded");
            })
        }

    }

    function deleteEventImage(){
        const newTitle =  eventTitle.replace(/ /g, '')
        const imageRef = ref(storage, "ImagenesEventos/" + newTitle);
        deleteObject(imageRef).then(()=>{
            alert("file deleted");
        }).catch((error)=>{
            alert("There was an error with the upload");
        })

    }

    /*Personal Image Functions */
    
    function uploadPersonalImage(){
        if(personalPicture == null) return;
        const newTitle =  personalFullName.replace(/ /g, '')
        const imageRef = ref(storage, "ImagenesPersonal/" + newTitle);
        if(personalPicture){
            uploadBytes(imageRef, personalPicture).then(()=>{
                alert("image uploaded");
            })
        }
        
    }

    function deletePersonalImage(){
        const newTitle =  personalFullName.replace(/ /g, '')
        const imageRef = ref(storage, "ImagenesPersonal/" + newTitle);
        deleteObject(imageRef).then(()=>{
            alert("file deleted");
        }).catch((error)=>{
            alert("There was an error with the upload");
        })

    }

     /*PPlayer Image Functions */
    
     function uploadPlayerImage(){
        if(personalPicture == null) return;
        const newTitle =  playerFullName.replace(/ /g, '')
        const imageRef = ref(storage, "ImagenesPlayers/" + newTitle);
        if(playerPicture){
            uploadBytes(imageRef, playerPicture).then(()=>{
                alert("image uploaded");
            })
        }

    }

    function uploadGallery(){
        if(galleryPicture == null) return;
       
        const newTitle =  playerFullName.replace(/ /g, '');
        const newName = galleryName.replace(/ /g, '');
        const imageRef = ref(storage, "ImagenesPlayers/" + newTitle + "Gallery" + "/" + newName);
        if(galleryPicture){
            uploadBytes(imageRef, galleryPicture).then(()=>{
                alert("image uploaded");
            })
        }
    }

    function deletePlayerImage(){
        const newTitle =  playerFullName.replace(/ /g, '')
        const imageRef = ref(storage, "ImagenesPlayers/" + newTitle);
        deleteObject(imageRef).then(()=>{
            alert("file deleted");
        }).catch((error)=>{
            alert("There was an error with the upload");
        })

    }

    return (
        <div className="GlobalEdit">
            {passwordState && 
                <div className="password-container">
                    <h2 className="team-title">Ingresar Contraseña</h2>
                    <form onSubmit={handlePasswordSubmit}>
                        <input type="password" value={passValue} onChange={(event)=>{setPassValue(event.target.value)}}/>
                        <button >Ingresar</button>
                    </form>
                    
                </div>
            }

            <Navbar light={{inicio: false, equipo: false, eventos: false, acercaDe: false, servicios: false, contactos: false }}/>
            <div className="team-container" style={{display: "flex", flexDirection: "column"}}>
                <h1 className="team-title">EDITAR COMPONENTES</h1>
                <hr />
                <div className="edit-container">
                    <h2 className="edit-subtitle">Eventos</h2>
                    <button className="edit-open-button" onClick={()=>{openFunc("add", setAddEvent, setEditEvent, setEraseEvent, eventState, setEventState,visibleState1); EraseEventStates();}}><i className="fa-solid fa-plus"></i></button>
                    <button className="edit-open-button" onClick={()=>{openFunc("erase", setAddEvent, setEditEvent, setEraseEvent, eventState, setEventState, visibleState2); EraseEventStates();}}><i className="fa-solid fa-minus"></i></button>
                    <button className="edit-open-button" onClick={()=>{openFunc("edit", setAddEvent, setEditEvent, setEraseEvent, eventState, setEventState, visibleState1); EraseEventStates();}}><i className="fa-solid fa-pen-to-square"></i></button>
                </div>
                <div className="edit-add-container" style={{height: addEvent[0], overflow: addEvent[1], padding: addEvent[2]}}>
                    <h2 className="edit-opened-subtitle">Añadir un Nuevo Evento</h2>
                    <hr />

                    <form action="" onSubmit={handleEventUpload}>
                        <label><p>Imagen de Evento:</p><input type="file" onChange={(event) => {setEventImage(event.target.files[0])}}/></label>
                        <label><p>Titulo:</p><input type="text" maxLength="40" value={eventTitle} onChange={(event)=>{setEventTitle(event.target.value)}} required/></label>
                        <label><p>Subtitulo:</p><input type="text" maxLength="50" value={eventSubtitle} onChange={(event)=>{setEventSubtitle(event.target.value)}} required/></label>
                        <label><p>Fecha:</p><input type="date" value={eventDate} onChange={(event)=>{setEventDate(event.target.value)}} required/></label>
                        <label><p>Descripcion</p><textarea cols="30" rows="10" value={eventDescription} onChange={(event)=>{setEventDescription(event.target.value)}} required></textarea></label>   
                        <button style={{width: "75px", alignSelf:"center"}} type="submit">Subir</button>       
                    </form>
                </div>
                <div className="edit-add-container" style={{height: editEvent[0], overflow: editEvent[1], padding: editEvent[2]}}>
                    <h2 className="edit-opened-subtitle">Editar un Evento</h2>
                    <hr />
                    <form action="" onSubmit={handleEventUpdate}>
                        <label>
                            <p>Elegir Evento:</p>
                            <select value ={selectedEvent} onChange={(event)=>{setSelectedEvent(event.target.value)}} >
                                <option value="">-Seleccionar un Evento-</option>
                                 {infoEvents.map((event)=>(
                                    <option value={event.Title}>{event.Title}</option>
                                ))}
                            </select>
                        </label>
                        <label><p>Imagen de Evento:</p><input type="file"  onChange={(event) => {setEventImage(event.target.files[0])}}/></label>
                        <label><p>Titulo:</p><input type="text" maxLength="40" value={eventTitle} onChange={(event)=>{setEventTitle(event.target.value)}} required/></label>
                        <label><p>Subtitulo:</p><input type="text" maxLength="50" value={eventSubtitle} onChange={(event)=>{setEventSubtitle(event.target.value)}} required/></label>
                        <label><p>Fecha:</p><input type="date" value={eventDate} onChange={(event)=>{setEventDate(event.target.value)}} required/></label>
                        <label><p>Descripcion</p><textarea cols="30" rows="10" value={eventDescription} onChange={(event)=>{setEventDescription(event.target.value)}} required></textarea></label>   
                        <button style={{width: "75px", alignSelf:"center"}} type="submit">Subir</button>       
                    </form>
                </div>
                <div className="edit-add-container" style={{height: eraseEvent[0], overflow: eraseEvent[1], padding: eraseEvent[2]}}>
                    <h2 className="edit-opened-subtitle">Borrar un Evento</h2>
                    <hr />
                    <form action="" onSubmit={handleEventDelete}>
                        <label>
                            <p>Elegir Evento:</p>
                            <select value ={selectedEvent} onChange={(event)=>{setSelectedEvent(event.target.value)}} required>
                                <option value="">-Seleccionar un Evento-</option>
                                 {infoEvents.map((event)=>(
                                    <option value={event.Title}>{event.Title}</option>
                                ))}
                            </select>
                        </label>
                        <button style={{width: "75px", alignSelf:"center"}} type="submit">Subir</button>       
                    </form>
                </div>

 
                <div className="edit-container">
                    <h2 className="edit-subtitle">Equipo</h2>
                    <button className="edit-open-button" onClick={()=>{openFunc("add", setAddPlayer, setEditPlayer, setErasePlayer, playerState, setPlayerState, visibleState3); ErasePlayerStates();}}><i className="fa-solid fa-plus"></i></button>
                    <button className="edit-open-button" onClick={()=>{openFunc("erase", setAddPlayer, setEditPlayer, setErasePlayer, playerState, setPlayerState, visibleState3); ErasePlayerStates();}}><i className="fa-solid fa-minus"></i></button>
                    <button className="edit-open-button" onClick={()=>{openFunc("edit", setAddPlayer, setEditPlayer, setErasePlayer, playerState, setPlayerState, visibleState5); ErasePlayerStates();}}><i className="fa-solid fa-pen-to-square"></i></button>
                </div>
                <div className="edit-add-container" style={{height: addPlayer[0], overflow: addPlayer[1], padding: addPlayer[2]}}>
                    <h2 className="edit-opened-subtitle">Añadir un Nuevo Jugador</h2>
                    <hr />
                    <form action="" onSubmit={handlePlayerUpload}>
                        <label><p>Imagen de Usuario:</p><input type="file" onChange={(event)=>{setPlayerPicture(event.target.files[0])}}/></label>
                        <label><p>Nombre:</p><input type="text" value={playerName} onChange={(event)=>{setPlayerName(event.target.value)}} required/></label>
                        <label><p>Apodo/Apellido:</p><input type="text" maxLength="10" value={playerNick} onChange={(event)=>{setPlayerNick(event.target.value)}} required/></label>
                        <label><p>Nombre Completo:</p><input type="text" value={playerFullName} onChange={(event)=>{setPlayerFullName(event.target.value)}} required/></label>
                        <label><p>Altura:</p><input type="text" value={playerHeight} onChange={(event)=>{setPlayerHeight(event.target.value)}}/></label>
                        <label><p>Peso:</p><input type="text" value={playerWeight} onChange={(event)=>{setPlayerWeight(event.target.value)}}/></label>
                        <label><p>Fecha de Nacimiento:</p><input type="text" value={playerDate} onChange={(event)=>{setPlayerDate(event.target.value)}}/></label>
                        <label><p>Lugar de Nacimiento:</p><input type="text" value={playerPlace} onChange={(event)=>{setPlayerPlace(event.target.value)}}/></label>
                        <label><p>No. Ranking:</p><input type="number" value={playerRank} onChange={(event)=>{setPlayerRank(event.target.value)}}required/></label>
                        <label><p>Puntaje de Ranking:</p><input type="number" value={playerPoints} onChange={(event)=>{setPlayerPoints(event.target.value)}}required/></label>
                        <label><p>Categoria:</p><select value ={playerCategory} onChange={(event)=>{setPlayerCategory(event.target.value)}} required>
                                <option value="">-Seleccionar una Categoria-</option>
                                <option value="Primera Categoria">Primera Categoria</option>
                                <option value="Segunda Categoria">Segunda Categoria</option>
                                <option value="Tercera Categoria">Tercera Categoria</option>
                                <option value="Cuarta Categoria">Cuarta Categoria</option>
                                <option value="Quinta Categoria">Quinta Categoria</option>
                                <option value="Pequeños Campeones">Pequeños Campeones</option>
                            </select></label>
                        <label><p>Division de Edad:</p><input type="text" value={playerAgeDiv} onChange={(event)=>{setPlayerAgeDiv(event.target.value)}}/></label>
                        <label><p>Descripcion</p><textarea cols="30" rows="10" value={playerDescription} onChange={(event)=>{setPlayerDescription(event.target.value)}} required></textarea></label>   
                        <button style={{width: "75px", alignSelf:"center"}} type="submit">Subir</button>       
                    </form>
                    
                </div>
                <div className="edit-add-container" style={{height: editPlayer[0], overflow: editPlayer[1], padding: editPlayer[2]}}>
                    <h2 className="edit-opened-subtitle">Editar un Jugador</h2>
                    <hr />
                    <form action="" onSubmit={handlePlayerUpdate}>
                         <label>
                            <p>Elegir Jugador:</p>
                            <select value ={selectedPlayer} onChange={(event)=>{setSelectedPlayer(event.target.value)}}>
                                <option value="">-Seleccionar un Jugador-</option>
                                {infoEquipo.map((jugador)=>(
                                    <option value={jugador.name}>{jugador.name}</option>
                                ))}
                            </select>
                        </label>
                        <label><p>Imagen de Usuario:</p><input type="file" onChange={(event)=>{setPlayerPicture(event.target.files[0])}}/></label>
                        <label><p>Nombre:</p><input type="text" value={playerName} onChange={(event)=>{setPlayerName(event.target.value)}} required/></label>
                        <label><p>Apodo/Apellido:</p><input type="text" maxLength="10" value={playerNick} onChange={(event)=>{setPlayerNick(event.target.value)}} required/></label>
                        <label><p>Nombre Completo:</p><input type="text" value={playerFullName} onChange={(event)=>{setPlayerFullName(event.target.value)}} required/></label>
                        <label><p>Altura:</p><input type="text" value={playerHeight} onChange={(event)=>{setPlayerHeight(event.target.value)}}/></label>
                        <label><p>Peso:</p><input type="text" value={playerWeight} onChange={(event)=>{setPlayerWeight(event.target.value)}} /></label>
                        <label><p>Fecha de Nacimiento:</p><input type="text" value={playerDate} onChange={(event)=>{setPlayerDate(event.target.value)}}/></label>
                        <label><p>Lugar de Nacimiento:</p><input type="text" value={playerPlace} onChange={(event)=>{setPlayerPlace(event.target.value)}}/></label>
                        <label><p>No. Ranking:</p><input type="number" value={playerRank} onChange={(event)=>{setPlayerRank(event.target.value)}} required/></label>
                        <label><p>Puntaje de Ranking:</p><input type="number" value={playerPoints} onChange={(event)=>{setPlayerPoints(event.target.value)}} required/></label>
                        <label><p>Categoria:</p><select value ={playerCategory} onChange={(event)=>{setPlayerCategory(event.target.value)}} required>
                                <option value="">-Seleccionar una Categoria-</option>
                                <option value="Primera Categoria">Primera Categoria</option>
                                <option value="Segunda Categoria">Segunda Categoria</option>
                                <option value="Tercera Categoria">Tercera Categoria</option>
                                <option value="Cuarta Categoria">Cuarta Categoria</option>
                                <option value="Quinta Categoria">Quinta Categoria</option>
                                <option value="Pequeños Campeones">Pequeños Campeones</option>
                            </select></label>
                        <label><p>Division de Edad:</p><input type="text" value={playerAgeDiv} onChange={(event)=>{setPlayerAgeDiv(event.target.value)}}/></label>
                        <label><p>Descripcion</p><textarea cols="30" rows="10" value={playerDescription} onChange={(event)=>{setPlayerDescription(event.target.value)}} required></textarea></label>   
                        <button style={{width: "75px", alignSelf:"center"}} type="submit">Subir</button>       
                    </form>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <h2 className="edit-opened-subtitle">Añadir Imagen a Galeria</h2>
                    <hr />
                    <form action="" onSubmit={handleGalleryUpload}>
                        <label><p>Imagen de Galeria:</p><input type="file" onChange={(event)=>{setGalleryPicture(event.target.files[0])}}/></label>
                        <label><p>Nombre de Imagen:</p><input type="text" value={galleryName} onChange={(event)=>{setGalleryName(event.target.value)}} required/></label>
                        <button style={{width: "75px", alignSelf:"center"}} type="submit">Subir</button>      
                    </form>                
                </div>
                <div className="edit-add-container" style={{height: erasePlayer[0], overflow: erasePlayer[1], padding: erasePlayer[2]}}>
                    <h2 className="edit-opened-subtitle">Borrar un Jugador</h2>
                    <hr />
                    <form action="" onSubmit={handlePlayerDelete}>
                        <label>
                            <p>Elegir Jugador: </p>
                            <select  value ={selectedPlayer} onChange={(event)=>{setSelectedPlayer(event.target.value)}} required>
                                <option value="">-Seleccionar un Jugador-</option>
                                {infoEquipo.map((jugador)=>(
                                    <option value={jugador.name}>{jugador.name}</option>
                                ))}
                            </select>
                        </label>
                        <button style={{width: "75px", alignSelf:"center"}} type="submit">Subir</button>       
                    </form>
                    <br />
                    <br />
                    <br />

                    <h2 className="edit-opened-subtitle">Borrar una Imagen</h2>
                    <hr />
                    <form action="" onSubmit={handlePlayerDelete}>
                        <label>
                            <p>Elegir Imagen: </p>
                            <select  value ={selectedPlayer} onChange={(event)=>{setSelectedPlayer(event.target.value)}} required>
                                <option value="">-Seleccionar una Imagen-</option>
                                {infoEquipo.map((jugador)=>(
                                    <option value={jugador.name}>{jugador.name}</option>
                                ))}
                            </select>
                        </label>
                        <button style={{width: "75px", alignSelf:"center"}} type="submit">Subir</button>       
                    </form>
                </div>



                <div className="edit-container">
                    <h2 className="edit-subtitle">Personal</h2>
                    <button className="edit-open-button" onClick={()=>{openFunc("add", setAddPersonal, setEditPersonal, setErasePersonal, personalState, setPersonalState, visibleState4); ErasePersonalStates();}}><i className="fa-solid fa-plus"></i></button>
                    <button className="edit-open-button" onClick={()=>{openFunc("erase", setAddPersonal, setEditPersonal, setErasePersonal, personalState, setPersonalState, visibleState2); ErasePersonalStates();}}><i className="fa-solid fa-minus"></i></button>
                    <button className="edit-open-button" onClick={()=>{openFunc("edit", setAddPersonal, setEditPersonal, setErasePersonal, personalState, setPersonalState, visibleState4); ErasePersonalStates();}}><i className="fa-solid fa-pen-to-square"></i></button>
                </div>
                <div className="edit-add-container" style={{height: addPersonal[0], overflow: addPersonal[1], padding: addPersonal[2]}}>
                    <h2 className="edit-opened-subtitle">Añadir un Nuevo Miembro del Personal</h2>
                    <hr />
                    <form action="" onSubmit={handlePersonalUpload}>
                        <label><p>Imagen de Usuario:</p><input type="file" onChange={(event)=>{setPersonalPicture(event.target.files[0])}}/></label>
                        <label><p>Nombre:</p><input type="text" value={personalName} onChange={(event)=>{setPersonalName(event.target.value)}} required/></label>
                        <label><p>Puesto:</p><input type="text" maxLength="10" value={personalJob} onChange={(event)=>{setPersonalJob(event.target.value)}} required/></label>
                        <label><p>Nombre Completo:</p><input type="text" value={personalFullName} onChange={(event)=>{setPersonalFullName(event.target.value)}} required/></label>
                        <label><p>celular:</p><input type="text" value={personalPhone} onChange={(event)=>{setPersonalPhone(event.target.value)}}/></label>
                        <label><p>correo:</p><input type="text" value={personalEmail} onChange={(event)=>{setPersonalEmail(event.target.value)}}/></label>
                        <label><p>Fecha de Nacimiento:</p><input type="text" value={personalDate} onChange={(event)=>{setPersonalDate(event.target.value)}}/></label>
                        <label><p>Lugar de Nacimiento:</p><input type="text" value={personalPlace} onChange={(event)=>{setPersonalPlace(event.target.value)}}/></label>
                        <label><p>Departamento:</p><select value ={personalDepartment} onChange={(event)=>{setPersonalDepartment(event.target.value)}} required>
                                <option value="">-Seleccionar un Departamento-</option>
                                <option value="Junta Directiva">Junta Directiva</option>
                                <option value="Entrenador">Entrenador</option>
                            </select></label>
                        <label><p>Descripcion</p><textarea cols="30" rows="10" value={personalDescription} onChange={(event)=>{setPersonalDescription(event.target.value)}} required></textarea></label>   
                        <button style={{width: "75px", alignSelf:"center"}} type="submit">Subir</button>       
                    </form>
                </div>
                <div className="edit-add-container" style={{height: editPersonal[0], overflow: editPersonal[1], padding: editPersonal[2]}}>
                    <h2 className="edit-opened-subtitle">Editar un Miemrbo del Personal</h2>
                    <hr />
                    <form action="" onSubmit={handlePersonalUpdate}>
                        <label>
                            <p>Elegir Miembro del Personal:</p>
                            <select value ={selectedPersonal} onChange={(event)=>{setSelectedPersonal(event.target.value)}}>
                                <option value="">-Seleccionar un Miembro del Personal-</option>
                                 {infoPersonal.map((person)=>(
                                    <option value={person.name}>{person.name}</option>
                                ))}
                            </select>
                        </label>
                        <label><p>Imagen de Usuario:</p><input type="file" onChange={(event)=>{setPersonalPicture(event.target.files[0])}}/></label>
                        <label><p>Nombre:</p><input type="text" value={personalName} onChange={(event)=>{setPersonalName(event.target.value)}} required/></label>
                        <label><p>Puesto:</p><input type="text" maxLength="10" value={personalJob} onChange={(event)=>{setPersonalJob(event.target.value)}} required/></label>
                        <label><p>Nombre Completo:</p><input type="text" value={personalFullName} onChange={(event)=>{setPersonalFullName(event.target.value)}} required/></label>
                        <label><p>celular:</p><input type="text" value={personalPhone} onChange={(event)=>{setPersonalPhone(event.target.value)}}/></label>
                        <label><p>correo:</p><input type="text" value={personalEmail} onChange={(event)=>{setPersonalEmail(event.target.value)}}/></label>
                        <label><p>Fecha de Nacimiento:</p><input type="text"  value={personalDate} onChange={(event)=>{setPersonalDate(event.target.value)}}/></label>
                        <label><p>Lugar de Nacimiento:</p><input type="text" value={personalPlace} onChange={(event)=>{setPersonalPlace(event.target.value)}}/></label>
                        <label><p>Departamento:</p><select  value ={personalDepartment} onChange={(event)=>{setPersonalDepartment(event.target.value)}} required>
                                <option value="">-Seleccionar un Departamento-</option>
                                <option value="Junta Directiva">Junta Directiva</option>
                                <option value="Entrenador">Entrenador</option>
                            </select></label>
                        <label><p>Descripcion</p><textarea cols="30" rows="10" value={personalDescription} onChange={(event)=>{setPersonalDescription(event.target.value)}} required></textarea></label>   
                        <button style={{width: "75px", alignSelf:"center"}} type="submit">Subir</button>       
                    </form>
                </div>
                <div className="edit-add-container" style={{height: erasePersonal[0], overflow: erasePersonal[1], padding: erasePersonal[2]}}>
                    <h2 className="edit-opened-subtitle">Borrar un Miembro del Personal</h2>
                    <hr />
                    <form action="" onSubmit={handlePersonalDelete}>
                        <label>
                            <p>Elegir Miembro del Personal: </p>
                            <select value ={selectedPersonal} onChange={(event)=>{setSelectedPersonal(event.target.value)}} required>
                                <option value="">-Seleccionar un Miembro del Personal-</option>
                               {infoPersonal.map((person)=>(
                                    <option value={person.name}>{person.name}</option>
                                ))}
                            </select>
                        </label>
                        <button style={{width: "75px", alignSelf:"center"}} type="submit">Subir</button>       
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default GlobalEdit;