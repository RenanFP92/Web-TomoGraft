import Imagen from '../Imagen';
function Conocenos(){
    return(
    <div>
        <h2 id="conocenos">ACERCA DE TOMOGRAFT</h2>
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-6">
              <img src={Imagen.fotoprincipal} className="img-fluid rounded" alt="foto principal de la pagina" />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <p className="card-text">
                TOMOGRAFT tiene como principal propósito brindar el mejor diagnóstico a través de imágenes de alta definición y servicio de laboratorio dental para pacientes odontológicos que desean mejorar su salud bucal y disfrutar de una mejor calidad de vida.
                </p>
                <hr></hr>
                <h5 className="card-title">DIAGNÓSTICO DE IMAGENES DENTALES</h5>
                <p className="card-text">
                  <li>Radiografías dentales 2D </li>
                  <li>Tomografías dentales 3D</li>

                </p>
                <hr></hr>
                <h5 className="card-title">LABORATORIO DENTAL</h5>
                <p className="card-text">
                  <li>Prótesis</li>
                  <li>Coronas: Metal y Zirconio</li>
                  <li>Carillas</li>
                  <li>Aparatos de ortodoncia</li>
                </p>
              </div>
            </div>
          </div>
        </div>
    </div>
    )
}
export default Conocenos;
