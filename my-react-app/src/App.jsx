import Encabezado from "./Encabezado.jsx";
import {useState} from "react";
import ContenedorTarjetas from "./ContenedorTarjetas.jsx";
import ContenedorInformacion from "./Informacion.jsx";
import ContenedorPie from "./Pie.jsx";

function App(){
  const [vista, setVista] = useState("Inicio");
  return (
  <div className="App">
  <Encabezado CambiarVista={setVista}/>
  <ContenedorTarjetas vista={vista}/>
  <ContenedorInformacion/>
  <ContenedorPie/>
    </div>
  )
}
export default App