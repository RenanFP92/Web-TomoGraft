import Imagen from "../Imagen";

function Testimonio() {
  return (
    <div className="opinion-container">
      <h2 className="mb-4 text-white">¿Que opinan de nosotros?</h2>
      <div className="row justify-content-center">

        <div className="col-md-3 col-md-2 mb-3">
          <div className="card">
            <img src={Imagen.testimonio1} className="card-img-top" alt="" />
            <div className="card-body">
              <h5 className="card-title">Dr. Leonardo Rodríguez</h5>
              <p className="card-text">"El personal de Laboratorio es impecable, son profesionales altamente calificados".</p>
            </div>
          </div>
        </div>

        <div className="col-md-3 col-md-2 mb-3">
          <div className="card">
            <img src={Imagen.testimonio2} className="card-img-top" alt="" />
            <div className="card-body">
              <h5 className="card-title">Camila Mendoza</h5>
              <p className="card-text">"Los equipos que manejan son de primera . Muy contenta con los resultados".</p>
            </div>
          </div>
        </div>

        <div className="col-md-3 col-md-2 mb-3">
          <div className="card">
            <img src={Imagen.testimonio3} className="card-img-top" alt="" />
            <div className="card-body">
              <h5 className="card-title">Susan Paredes</h5>
              <p className="card-text">“100% recomendados por su excelente  atención, ubicación y calidad de servicio.”</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Testimonio;