import './Pie.css' ;

function ContenedorPie(){
    return(
       <footer className='ContenedorPie'>
        <Pie/>
        <Pie2/>
       </footer>
    )
}
function Pie(){
    return(
    <div className="Pie">
    <p>Copyright © 2025</p>
    </div>
    )  
}
function Pie2(){
    return(
    <div className="Pie2">
    <p>Aqui va un pie jeje</p>
    </div>
    )  
}
export default ContenedorPie;