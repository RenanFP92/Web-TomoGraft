import Servicio from "./reutilizables/Servicio";
import Imagen from '../Imagen';
function Servicios() {
    return (
        <div className=" service-container text-center my-5">
            <h2 id="servicios"className="mb-4 text-white">NUESTROS SERVICIOS A TU ALCANCE</h2>
            <div className="row justify-content-center">
                <div className="col-sm-4 col-md-2 mb-3">
                    <Servicio
                        imagen={Imagen.servicio1}
                        alt="Servicio1"
                        titulo="ESTUDIOS 2D"
                    />
                </div>
                <div className="col-sm-4 col-md-2 mb-3">
                    <Servicio
                        imagen={Imagen.servicio2}
                        alt="Servicio2"
                        titulo="ESTUDIOS 3D"
                    />
                </div>
                <div className="col-sm-4 col-md-2 mb-3">
                    <Servicio
                        imagen={Imagen.servicio3}
                        alt="Servicio3"
                        titulo="REGISTRO ORTODONCIA"
                    />
                </div>
                <div className="col-sm-4 col-md-2 mb-3">
                    <Servicio
                        imagen={Imagen.servicio4}
                        alt="Servicio4"
                        titulo="LABORATORIO CAD-CAM"
                    />
                </div>
                <div className="col-sm-4 col-md-2 mb-3">
                    <Servicio
                        imagen={Imagen.servicio5}
                        alt="Servicio5"
                        titulo="LABORATORIO ORTODONCIA"
                    />
                </div>
            </div>
        </div>
    )
}
export default Servicios;