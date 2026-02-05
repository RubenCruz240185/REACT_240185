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
  {/*<h1>5A EVND</h1>
  <h2>Alumno</h2>
  <h3>Ruben Emanuel cruz Garcia</h3>
  <UserComponent />
  <ProfileComponent/>
  <FeedComponent/>
 

function UserComponent(){
  const nombre = 'Ema';
  const apellidos = 'Nem';
  const nombreCompleto = <h1>El nombre es: {nombre} y sus apellidos {apellidos}</h1>; 
  return <h3>User Component {nombreCompleto}</h3>;
}
function ProfileComponent(){
  const users = [
    { id: 1, name:'Ruben', role: 'web Devolper'},
    { id: 1, name:'Emanuel', role: 'web Devolper'},
    { id: 1, name:'Hotdog', role: 'Team Leader'}
  ]
  return (
    <>
    <p>Lista de usuarios del sistema</p>
    <ul>
      {
      users.map(function(user, index){
      return (
        <li key={index}>{user.name} es un {user.role} </li>
      )
    })
    }
    </ul>
  </>
  );
}
function FeedComponent(){
  const items = [
    { id: 1, name:'cemento', role: 'Material General'},
    { id: 1, name:'block', role: 'Material Paredes'},
    { id: 1, name:'HotDog', role: 'Alimento'}
  ]
  return (
  <>
  <h2 className="text-lowercase">Feed Component</h2>
  <ul>
    {
    items.map(function(item, index){
      return (
        <li key={index}>{item.name} es para {item.role}</li>
      )
    }
  )}
  </ul>
  </>
  );
}
   */}
export default App