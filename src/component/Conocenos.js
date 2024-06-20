import Imagen from '../Imagen';
function Conocenos(){
    return(
    <div >
    <div className="card mb-3" style={{ maxwidth: '540px' }} >
      <div className="row g-0">
        <div className="col-md-4">
          <img src={Imagen.fotoprincipal}  className="img-fluid rounded-start" alt="..."/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">TOMOGRAFT </h5>
            <p className="card-text">tiene como principal propósito brindar el mejor diagnóstico a través de imágenes de alta definición y servicio de laboratorio dental para pacientes odontológicos que desean mejorar su salud bucal y disfrutar de una mejor calidad de vida.</p>
          </div>
        </div>
      </div>
    </div>

    <div className="card mb-3" style={{ maxwidth: '540px' }} >
      <div className="row g-0">
        <div className="col-md-4"> 
          <img src={Imagen} className="img-fluid rounded-start" alt="..."/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>

    <div className="card mb-3" style={{ maxwidth: '540px' }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={Imagen} className="img-fluid rounded-start" alt="..."/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
       
    </div>
    )
}
export default Conocenos;
