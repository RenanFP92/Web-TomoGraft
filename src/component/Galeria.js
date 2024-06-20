
import videoAnuncio from '../videos/videoAnuncio.mp4';
function Galeria() {
    return (
        <div>
            <h2 id="galeria">Galería</h2>

            <div>
                <div className="card mb-3" >
                    <div className="row g-0">
                        <div className="col-md-8">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.523193897809!2d-77.09342632579316!3d-12.076292442449487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c96f4fb01d41%3A0x95bd442895426f4f!2sTOMOGRAFT%20-%20CENTRO%20DE%20IMAGENES%20DENTALES!5e0!3m2!1ses-419!2sco!4v1718864484133!5m2!1ses-419!2sco" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div className="col-md-4">
                            <div className="card-body">
                                <h5 className="card-title">Mapa de Ubicación de Tomograft</h5>
                                <hr class="border border-primary border-3 opacity-75"></hr>
                                <p className="card-text">Tomograft está convenientemente ubicado en el corazón de Lima Peru, asegurando un acceso fácil y rápido para nuestros pacientes. Nuestra clínica, situada en Calle Martin de Murúa 150, Oficina 505 de San Miguel,se destaca por su proximidad y conveniencia, facilitando una experiencia cómoda desde el momento de la llegada.</p>
                                <p className="card-text">Visítenos con nuestro enfoque en la excelencia pueden beneficiar su salud dental. Estamos aquí para transformar sonrisas con la más alta calidad de cuidado y servicio.</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <div className="card-body">
                                <h5 className="card-title">Conoce el interior de nuestra sede: Un Recorrido Virtual</h5>
                                <hr class="border border-primary border-3 opacity-75"></hr>
                                <p className="card-text"> ¡Acompáñanos en este recorrido virtual y sumérgete en la experiencia única de conocer el interior de nuestra sede!</p>
                                <p className="card-text">Sean bienvenidos a un recorrido exclusivo por el interior de nuestra sede. En este video, te invitamos a explorar cada rincón de nuestras instalaciones en San Miguel, Lima - Perú. Desde la recepción, donde serás recibido con calidez, hasta nuestras áreas especializadas donde ocurre la magia del diagnóstico dental avanzado.</p>
                            </div>
                        </div>
                        <div className="col-md-8">
                        <video controls style={{width: '600px', height: '450px'}}>
                            <source src={videoAnuncio} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        </div>
                    </div>
                </div>  
            
            </div>
        </div>
    )
}
export default Galeria;