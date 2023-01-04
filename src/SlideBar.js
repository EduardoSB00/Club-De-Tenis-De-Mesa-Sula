import { useEffect, useState } from "react";
import { getDownloadURL, getStorage, ref } from "firebase/storage";

const SlideBar = (props) => {

    const [currentSlide, SetCurrentSlide] = useState(0);
    const [currentPosition, setCurrentPosition] = useState("0vw");
    
    useEffect(() => {
        const interval = setInterval(() => {
            SingleMovement(1);
          }, 10000);
          return () => clearInterval(interval);
    })

    function SingleMovement(move){
        if (move === -1){
            if(currentSlide === 0){
                SetCurrentSlide(2);
                setCurrentPosition("-170vw");
            }
            if(currentSlide === 1){
                SetCurrentSlide(0);
                setCurrentPosition("0vw");
            }
            if(currentSlide === 2){
                SetCurrentSlide(1);
                setCurrentPosition("-85vw");
            }   
        }

        if (move === 1){
            if(currentSlide === 0){
                SetCurrentSlide(1);
                setCurrentPosition("-85vw");
            }
            if(currentSlide === 1){
                SetCurrentSlide(2);
                setCurrentPosition("-170vw");
            }
            if(currentSlide === 2){
                SetCurrentSlide(0);
                setCurrentPosition("0vw");
            }   
        }
    }

    function SpecificMovement(place){
        if (place===0){
            setCurrentPosition("0vw");
            SetCurrentSlide(0);
        }
        if (place===1){
            setCurrentPosition("-85vw");
            SetCurrentSlide(1);
        }
        if (place===2){
            setCurrentPosition("-170vw");
            SetCurrentSlide(2);
        }
    }

    
    const storage = getStorage();    

    const [thumbnail1, setThumbnail1]=useState("");
    const [thumbnail2, setThumbnail2]=useState("");
    const [thumbnail3, setThumbnail3]=useState("");

    const thumbnails = [thumbnail1,thumbnail2,thumbnail3];
    const newTitle1 =  props.info[0].Title.replace(/ /g, '')
    const imageRef1 = ref(storage, "ImagenesEventos/" + newTitle1);
    const newTitle2 =  props.info[1].Title.replace(/ /g, '')
    const imageRef2 = ref(storage, "ImagenesEventos/" + newTitle2);
    const newTitle3 =  props.info[2].Title.replace(/ /g, '')
    const imageRef3 = ref(storage, "ImagenesEventos/" + newTitle3);
    

    getDownloadURL(imageRef1).then((url)=>{
        
        setThumbnail1(url);
    })

    getDownloadURL(imageRef2).then((url)=>{
        
        setThumbnail2(url);
    })

    getDownloadURL(imageRef3).then((url)=>{
     
        setThumbnail3(url);
    })
    
    return ( 
        <div>
                {thumbnails && <div className="SlideBar">
                    <div className="slide-bar-magic" style={{left: currentPosition}}>
                        {props.info.map((event,index) => (
                            <div className="slide-container">
                                <img src={thumbnails[index]} alt="" className="slide-image" />
                                <div className="slide-elements">
                                    <h1>{event.Title}</h1>
                                    <a href={"/Eventos/"+event.id}><button>Mas Informacion</button>   </a>              
                                </div>
                            </div>
                        ))}
                    </div>

                    

                    <div className="slideBar-buttons">
                        <div className="slideBar-button" onClick={()=>{SingleMovement(-1)}}>
                            <i className="fa-sharp fa-solid fa-chevron-left"></i>
                        </div>
                        <div className="slideBar-button" onClick={()=>{SingleMovement(1)}}>
                            <i className="fa-sharp fa-solid fa-chevron-right"></i>
                        </div>
                    </div>

                    <div className="slideBar-circles">
                        <div className="slidebar-circle" onClick={()=>{SpecificMovement(0)}}></div>
                        <div className="slidebar-circle" onClick={()=>{SpecificMovement(1)}}></div>
                        <div className="slidebar-circle" onClick={()=>{SpecificMovement(2)}}></div>
                    </div>  
                </div>}
                        
        </div>
        
        
     );
}
 
export default SlideBar;