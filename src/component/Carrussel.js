import ImagenCarrusel from'./reutilizables/ImagenCarrusel';
import Imagen from '../Imagen';
function Carrusel() {
    return(
    <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
           
            <ImagenCarrusel estilo="carousel-item active" intervalo="3000" imagen={Imagen.carrusel1} textalt="Carrusel1" />
           
            <ImagenCarrusel estilo="carousel-item active" intervalo="3000" imagen={Imagen.carrusel2} textalt="Carrusel2" />
            
            <ImagenCarrusel estilo="carousel-item active" intervalo="3000" imagen={Imagen.carrusel3} textalt="Carrusel3" />
            
        </div>
         {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Anterior</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Siguiente</span>
        </button>  */}
    </div>
    )
}
export default Carrusel;
