function MenuPrincipal() {
    return(
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark" id="menuprincipal">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">TomoGraft</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="conocenos">¿Quiénes somos?</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#servicios_tecnologia">Servicios y Tecnología</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#testimonios">Testimonios</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#preguntas_frecuentes">Preguntas Frecuentes</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#cubicanos">Ubícanos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contactanos">Contáctanos</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}
export default MenuPrincipal;