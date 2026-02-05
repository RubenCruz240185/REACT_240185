import './Informacion.css';

function ContenedorInformacion(){
    return(
        <Informacion />
    )
}

function Informacion(){
  return(
       <div className="Info">
            <h3>Aqui deberia haber un titulo</h3>
            <p>Aqui deberia haber un texto</p>
            <a href="#">Ver más</a>
        </div>    
    )
}
        

export default ContenedorInformacion;