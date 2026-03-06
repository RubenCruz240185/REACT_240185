import Encabezado from "./Encabezado.jsx";
import { useState } from "react";
import ContenedorTarjetas from "./ContenedorTarjetas.jsx";
import ContenedorInformacion from "./Informacion.jsx";
import ContenedorPie from "./Pie.jsx";
import { AuthProvider } from "./AuthContext.jsx";

function App() {
  const [vista, setVista] = useState("Inicio");
  const [carritoLocal, setCarritoLocal] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarritoLocal((prev) => {
      const existente = prev.find((item) => item.id === producto.id);

      if (existente) {
        return prev.map((item) =>
          item.id === producto.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }

      return [
        ...prev,
        {
          id: producto.id,
          title: producto.title,
          price: producto.price,
          image: producto.image,
          quantity: 1,
        },
      ];
    });
  };

  return (
    <div className="App">
      <AuthProvider>
      <Encabezado CambiarVista={setVista} /></AuthProvider>
      <ContenedorTarjetas
        vista={vista}
        carritoLocal={carritoLocal}
        agregarAlCarrito={agregarAlCarrito}
      />
      <ContenedorInformacion />
      <ContenedorPie />
    </div>
  );
}

export default App;
