const Servicio = ({ imagen, alt, titulo, buttonText }) => {
    return (
      <div className="card h-100 d-flex flex-column">
        <img src={imagen} alt={alt} className="card-img-top img-fluid mb-2" />
        <div className="card-body d-flex flex-column">
          <h5>{titulo}</h5>
        </div>
      </div>
    );
  };
  
  export default Servicio;