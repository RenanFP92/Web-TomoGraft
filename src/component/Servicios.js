import Servicio from "./reutilizables/Servicio";
import Imagen from '../Imagen';
function Servicios() {
    return (
        <div className="service-container text-center my-5">
            <h2 className="mb-4">Nuestros servicios a tu alcance</h2>
            <div className="row">
                <div className="col-sm-4 col-md-2 mb-3">
                    <Servicio
                        imagen={Imagen.servicio1}
                        alt="Servicio1"
                        titulo="ESTUDIOS 2D"
                        buttonText="CONTÁCTANOS"
                    />
                </div>
                <div className="col-sm-4 col-md-2 mb-3">
                    <Servicio
                        imagen={Imagen.servicio2}
                        alt="Servicio2"
                        titulo="ESTUDIOS 3D"
                        buttonText="CONTÁCTANOS"
                    />
                </div>
                <div className="col-sm-4 col-md-2 mb-3">
                    <Servicio
                        imagen={Imagen.servicio3}
                        alt="Servicio3"
                        titulo="REGISTRO ORTODONCIA"
                        buttonText="CONTÁCTANOS"
                    />
                </div>
                <div className="col-sm-4 col-md-2 mb-3">
                    <Servicio
                    imagen={Imagen.servicio4}
                    alt="Servicio4"
                    titulo="LABORATORIO CAD-CAM"
                    buttonText="CONTÁCTANOS"
                    />
                </div>
                <div className="col-sm-4 col-md-2 mb-3">
                    <Servicio
                    imagen={Imagen.servicio5}
                    alt="Servicio5"
                    titulo="LABORATORIO ORTODONCIA"
                    buttonText="CONTÁCTANOS"
                    />
                </div>
            </div>
        </div>
    )
}
export default Servicios;