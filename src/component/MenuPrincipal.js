import logo from "../img/logo.png";

function MenuPrincipal() {
    return(
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#2e8b99' }}  id="menuprincipal">
        <div className="container-fluid">

            <a className="navbar-brand" href="#"  >
            <img src={logo} style={{ width: '140px', marginRight: '10px' }} alt="Logo"/>


            </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav" >
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="conocenos" style={{ color: 'White ' , fontSize: '19px'  }} >  ¿Quiénes somos?</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#servicios_tecnologia"  style={{ color: 'White ', fontSize: '19px'  }} >Servicios y Tecnología</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#testimonios"  style={{ color: 'White ',fontSize: '19px'  }} >Testimonios</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#preguntas_frecuentes" style={{ color: 'White ' ,fontSize: '19px' }} >Preguntas Frecuentes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#cubicanos"  style={{ color: 'white', fontSize: '19px' }}> Ubícanos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contactanos"  style={{ color: 'White ', fontSize: '19px' }} >Contáctanos</a>
                        </li>
                    </ul>
                </div>
        </div>
    </nav>
    )
}
export default MenuPrincipal;