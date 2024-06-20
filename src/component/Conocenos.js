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
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
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
            <img src={Imagen.fotoprincipal2} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <p className="card-text">En TOMOGRAFT, ofrecemos servicios de diagnóstico y soluciones dentales de alta calidad para mejorar la salud bucal de nuestros pacientes.</p>
              <p className="bold-text">DIAGNÓSTICO POR IMÁGENES DENTALES:</p>
              <ul>
                <li>Radiografías Dentales 2D: Imágenes detalladas para identificar caries, fracturas y enfermedades periodontales.</li>
                <li>Tomografías Dentales 3D: Visión completa y en profundidad para procedimientos complejos como implantes.</li>
              </ul>
              <hr></hr>
              <p className="bold-text">LABORATORIO DENTAL:</p>
              <ul>
                <li>Prótesis: Soluciones efectivas y cómodas para reemplazar dientes perdidos.</li>
                <li>Coronas: Disponibles en metal y zirconio, combinando durabilidad y estética natural.</li>
                <li>Carillas: Mejoran la apariencia de los dientes, corrigiendo manchas y desgastes.</li>
                <li>Aparatos de Ortodoncia: Dispositivos personalizados para corregir alineaciones y mordidas.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
export default Conocenos;
