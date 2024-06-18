const Servicio=({imagen, alt, titulo, buttonText }) =>{
    return (
        <div className="service-card">
            <img src={imagen} alt={alt} className="img-fluid mb-2" />
            <h5>{titulo}</h5>
            <button className="btn btn-primary">{buttonText}</button>
        </div>
    );
}
export default Servicio;