import ImagenGaleria from './reutilizables/ImagenGaleria';
import Imagen from '../Imagen';
function Galeria() {
    return (
        <div>
            <h2 id="galeria">Galería</h2>

            <div className="card-group">
                {/* Imagen Galería 1 */}
                <ImagenGaleria imagen={Imagen.servicio1} textoalt="Boceto-1" textoalt2="Destiny-2" target="#exampleModal1" idtarget="exampleModal1" />

                {/* IMmagen Galería 2 */}
                <ImagenGaleria imagen={Imagen.servicio1} textoalt="Boceto-1" textoalt2="Destiny-2" target="#exampleModal2" idtarget="exampleModal2" />
            </div>
        </div>
    )
}
export default Galeria;