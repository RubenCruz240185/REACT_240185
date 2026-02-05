import Encabezado from "./Encabezado";
import ContenedorTarjetas from "./ContenedorTarjetas";
import ContenedorInformacion from "./Informacion";
import ContenedorPie from "./Pie";
function App(){
  return (
  <div className="App">
  <Encabezado/>
  <ContenedorTarjetas/>
  <ContenedorInformacion/>
  <ContenedorPie/>
    </div>
  )
}
export default App