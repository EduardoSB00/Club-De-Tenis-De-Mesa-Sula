const ServeciosPreview = (props) => {

    const buttonRoute = "/Servicios/"+props.info.id

    return ( 
        <div className="servicios-preview">
            <div className="servicios-preview-container">
                <img src={props.info.imagen} alt="" />
                <div className="servicios-preview-info">
                    <h2>{props.info.Titulo}</h2>
                    <p>{props.info.DescripcionBreve}</p>
                    <hr />
                    <p>{props.info.Precio}</p>
                    <a href={buttonRoute}><button>Mas Informacion</button></a>
                </div>
                
            </div>
        </div>
     );
}
 
export default ServeciosPreview;