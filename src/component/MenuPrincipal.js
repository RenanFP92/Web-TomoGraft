
import  logo from "../img/logo.png";
function MenuPrincipal() {
    return(
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#ffffff' }}  id="menuprincipal">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">
            <img src={logo} alt="Logo TomoGraft" className="mr-2" style={{ height: '30px' }} />
            </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav" >
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="conocenos" style={{ color: 'black ' , fontSize: '19px'  }} >  ¿Quiénes somos?</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#servicios_tecnologia"  style={{ color: 'black ', fontSize: '19px'  }} >Servicios y Tecnología</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#testimonios"  style={{ color: 'black ',fontSize: '19px'  }} >Testimonios</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#preguntas_frecuentes" style={{ color: 'black ' ,fontSize: '19px' }} >Preguntas Frecuentes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#cubicanos"  style={{ color: 'black', fontSize: '19px' }}> Ubícanos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contactanos" style={{ color: 'black ' , fontSize: '19px'  }}>Contáctanos</a>
                        </li>
                    </ul>
                </div>
        </div>
    </nav>
    )
}
export default MenuPrincipal;