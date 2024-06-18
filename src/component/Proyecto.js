import Imagen from "../Imagen";

function Proyecto(){
    return(
        <div>
            <h2 id="proyectos">Proyectos</h2>
        <div className="row">

          <div className="col-sm-4 mb-3 mb-sm-0">
            <div className="card">
              <img src={Imagen.servicio1} className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">ELDEN RING</h5>
                <p className="card-text">Participe en la implementación de los NPC'S y BOSSES</p>
              </div>
            </div>
          </div>

          <div className="col-sm-4 mb-3 mb-sm-0">
            <div className="card">
              <img src={Imagen.servicio1} className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">DESTINY 2</h5>
                <p className="card-text">Trabajo en la implementación de nuevas ideas relacionados al gusto de la comunidad</p>
              </div>
            </div>
          </div>

          <div className="col-sm-4 mb-3 mb-sm-0">
            <div className="card">
              <img src={Imagen.servicio1} className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">NFS: UNBOUND</h5>
                <p className="card-text">Adquirí experiencias sobre físicas de autos en entornos virtuales</p>
              </div>
            </div>
          </div>
        </div>
        <p></p>
        <div className="row">
          <div className="col-sm-4 mb-3 mb-sm-0">
            <div className="card">
              <img src={Imagen.servicio1} className="card-img-top" alt="Proyecto desarrollado para la empresa W" />
              <div className="card-body">
                <h5 className="card-title">BLOOD STRIKE</h5>
                <p className="card-text">Aprendí un poco más sobre el marketing e implementación de un juego movil.</p>
              </div>
            </div>
          </div>

          <div className="col-sm-4 mb-3 mb-sm-0">
            <div className="card">
              <img src={Imagen.servicio1} className="card-img-top" alt="Proyecto desarrollado para la empresa R" />
              <div className="card-body">
                <h5 className="card-title">GENSHIN IMPACT - AYAKA</h5>
                <p className="card-text">Tuve por primera vez la oportunidad de poder diseñar y programar el personaje Ayaka</p>
              </div>
            </div>
          </div>

          <div className="col-sm-4 mb-3 mb-sm-0">
            <div className="card">
              <img src={Imagen.servicio1} className="card-img-top" alt="Proyecto desarrollado para la empresa P" />
              <div className="card-body">
                <h5 className="card-title">MARATHON BUNGIE</h5>
                <p className="card-text">Un juego de los mismos creadores de Destiny aún en desarrollo</p>
              </div>
            </div>
          </div>

        </div>
        </div>
    )
}
export default Proyecto;