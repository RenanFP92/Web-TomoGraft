import Imagen from '../Imagen';
function Conocenos() {
  return (
    <div>

      <p></p>
      <h3>ACERCA DE TOMOGRAFT</h3>
      <p></p>

      <div className="card mb-3" style={{ maxwidth: '540px' }} >
        <div className="row g-0">
          <div className="col-md-4">
            <img src={Imagen.fotoprincipal} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">¿QUE ES TOMOGRAFT?</h5>
              <p className="card-text">TOMOGRAFT se dedica a proporcionar el mejor diagnóstico para pacientes odontológicos mediante el uso de imágenes de alta definición y un servicio de laboratorio dental de excelencia. Nuestro objetivo es mejorar la salud bucal y la calidad de vida de nuestros pacientes. Utilizamos tecnología avanzada para ofrecer imágenes detalladas que permiten una identificación precisa de problemas dentales y una planificación de tratamientos personalizados. Además, nuestro laboratorio dental fabrica prótesis y coronas de alta calidad, asegurando un tratamiento coherente y efectivo. En TOMOGRAFT, creemos que una buena salud bucal impacta directamente en el bienestar general, por lo que nos esforzamos por brindar una experiencia cómoda y un cuidado integral, acompañando a nuestros pacientes hacia una vida más saludable y plena.</p>
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
