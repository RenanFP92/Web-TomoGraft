
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
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                        <div className="col-md-8">
                        <video controls style={{ maxHeight: '180px' }}>
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