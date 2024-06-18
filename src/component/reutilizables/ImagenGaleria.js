const ImagenGaleria = ({ imagen, target, idtarget, textoalt, textoalt2 }) => {
    return (
        <div className="card">
            <img src={imagen} className="card-img-top" alt={textoalt} />
            <div className="card-body">
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={target}>
                    Abrir Imagen
                </button>
                <div className="modal fade" id={idtarget} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="modal-body">
                                <img src={imagen} class="img-fluid" alt={textoalt2} />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ImagenGaleria;