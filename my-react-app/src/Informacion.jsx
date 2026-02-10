import './Informacion.css';
function ContenedorInformacion(){
    return(
        <Informacion />
    )
}

function Informacion(){
  return(
       <div className="Info">
            <h3>Conteido</h3>
            <p>Aqui deberia haber contenido</p>
            <a href="#">Ver más</a>
        </div>    
    );
}
        

export default ContenedorInformacion;