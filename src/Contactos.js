import { useState } from "react";
import Navbar from "./Navbar";
import emailjs from "emailjs-com";


const Contactos = () => {

    
    const[messageName,setMessageName] = useState("");
    const[messageEmail,setMessageEmail] = useState("");
    const[messageSubject,setMessageSubject] = useState("");
    const[messageContent,setMessageContent] = useState("");

    function handleEraseStates(){
        setMessageContent("");
        setMessageEmail("");
        setMessageName("");
        setMessageSubject("");
    }

    function sendEmail(e){

        e.preventDefault();

    emailjs.sendForm('service_1zjswbg', 'template_wryg7ml', e.target, 'pA3gooAdUo6KpH2yv')
      .then((result) => {
          console.log(result.text);
          handleEraseStates();
      }, (error) => {
          console.log(error.text);
      });
}

    
    return ( 
        <div className="contactos">
            
            <Navbar light={{inicio: false, equipo: false, eventos: false, acercaDe: false, servicios: false, contactos: true }}/>
            <div className="team-container">
                <h1 className="team-title">CONTACTANOS!</h1>
                <hr />
                
                <h2 className="contact-subtitle">Te Estamos Esperando! Contactanos YA!</h2>
                <div className="contact-container">

                    <div className="contact-info">
                        <i className="fa-solid fa-location-dot"></i>
                        <p>DH255+VXW, Av. Fraternidad SE, </p>
                        <p>San Pedro Sula 21102</p>
                    </div>

                    <div className="contact-info">
                        <i className="fa-solid fa-mobile"></i>
                        <p>Llamanos</p>
                        <p>+504 9693-0178</p>
                    </div>
                   
                    <div className="contact-info">
                        <i className="fa-solid fa-envelope"></i>
                        <p>Envia un Correo</p>
                        <p>clubsulatenisdemesa@gmail.com</p>
                    </div>
                </div>

                

                <h2 className="contact-subtitle">Como Encontrarnos</h2>
                <div className="contact-info-2">
                    <p>El club deportivo de tenis de mesa Sula se encuentra ubicado en la ciudad de San Pedro Sula en la colonia FESITRAHN. Las instalaciones del club se encuentran en el gimnasio del colegio primero de mayo.</p>
                </div>
                <iframe className="contact-map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7687.1928990809!2d-87.99292305061053!3d15.559749600000012!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xee8f8dcf1e155a16!2sFirst%20of%20May%20Official%20High%20School!5e0!3m2!1sen!2shn!4v1666814950407!5m2!1sen!2shn" loading="lazy"></iframe>
            
                <div className="email-us-container">
                    <h2 className="email-us-subtitle">Envianos un Correo!</h2>
                    <hr />
                    <form action="" onSubmit={sendEmail}>
                        <label><p>Nombre: </p><input type="text" name="messageName" value={messageName} onChange={(event)=>{setMessageName(event.target.value)}} required/></label>
                        <label><p>Correo: </p><input type="email" name="messageEmail" value={messageEmail} onChange={(event)=>{setMessageEmail(event.target.value)}} required/></label>
                        <label><p>Asunto: </p><input type="text" name="messageSubject" value={messageSubject} onChange={(event)=>{setMessageSubject(event.target.value)}} required/></label>
                        <label><p>Mensaje: </p><textarea name="messageContent" id="" cols="30" rows="10"value={messageContent} onChange={(event)=>{setMessageContent(event.target.value)}} required></textarea></label>
                        <button className="gallery-button contact-button" type="submit">Enviar</button>
                    </form>
                </div>
            
            </div>
            
        </div>
     );
}
 
export default Contactos;