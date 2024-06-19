function Contactanos() {
    return (
        <div>
            <h2 id="contactanos">Contáctame</h2>
            <div className="card-group">

                <div className="card">
                    <div className="card-body">
                        <form>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Ingresa tu correo</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text">Tu correo no será compartido hacia otras personas</div>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Descripción</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <button type="submit" className="btn btn-primary">Enviar</button>
                        </form>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                       
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contactanos;