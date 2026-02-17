//20.14287969722685, -97.92718544557026
import './clima.css';
import { useEffect, useState } from "react";

function Clima(){

    const [clima, setClima] = useState(null);
    const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
    const lat = 20.14287969722685
    const lng = 97.92718544557026

    useEffect(()=>{
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric&lang=es`)
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data);
            setClima(data);
        })
        .catch((error)=> console.error("Error",error));
    },[])
    return(
        <div className="divClima">
            {
            clima ? (
                    <>
                    <p>{clima.name} Temp: {clima.main.temp}°c | Wed: {clima.main.humidity}</p>
                    <p>Descripcion: {clima.weather.description}</p>
                    </>
                ):(
                    <p>loadClima...</p>
                )
            }
        </div>
    )
}
export default Clima;