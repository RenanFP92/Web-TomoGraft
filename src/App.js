import './App.css';
//importando el CSS de Bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//importando el JS
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

import MenuPrincipal from './component/MenuPrincipal.js';
import Carrusel from './component/Carrussel.js';
import Conocenos from './component/Conocenos.js';
import Servicios from './component/Servicios.js';
import Ubicanos from './component/Ubicanos.js';
import Contactanos from './component/Contactanos.js';
import PiePagina from './component/PiePagina.js';
import RegresarInicio from './component/reutilizables/BotonInicio.js';
import Testimonio from './component/Testimonio.js';
import FaqAccordion from './component/FaqAccordion';
function App() {
  return (
    <div className="App">
      {/* contenedor */}
      <div className="container">

        {/* menu principal */}
        <MenuPrincipal/>
        {/* fin menu principal */}
        
        {/* carrusel */}
        <Carrusel/>
        {/* fin carrusel */}
        <hr></hr>
        {/* seccion conocenos */}
        {/* titulo */}
        <p></p>
        
        {/* quien soy - card */}
        <Conocenos />
        {/* fin conoceme */}

        {/* Servicios */}
        <Servicios />
        {/* fin Servicios */}

        {/* inicio Testimonio */}
        <Testimonio/>
        {/* fin de Testimonio */}

        {/* Preguntas Frecuentes */}
        <FaqAccordion />
        {/*Fin de Preguntas*/ }

        <p></p>

        {/* inicio Ubicanos */}
        <Ubicanos/>
        {/* cerrando Ubicanos */}

        {/* abriendo conractanos */}
        <Contactanos/>
        {/* Fin de contactanos */}

        {/* Abriendo footer */}
        <PiePagina/> 
        {/* Fin de footer */}
        <RegresarInicio />
      </div>
    </div>
  );
}

export default App;