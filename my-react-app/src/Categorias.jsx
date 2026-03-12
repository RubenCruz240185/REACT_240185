import { useEffect, useState } from 'react';
import './Categorias.css';

function Categorias() {
    const [categorias, setCategorias] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    const apiUrl = import.meta.env.VITE_THEMEALDB_API_KEY;

    useEffect(() => {
        fetch(apiUrl)
            .then((res) => {
                if (!res.ok) throw new Error('Error al obtener las categorías');
                return res.json();
            })
            .then((data) => {
                setCategorias(data.categories);
                setCargando(false);
            })
            .catch((err) => {
                setError(err.message);
                setCargando(false);
            });
    }, [apiUrl]);

    if (cargando) return <p className="categorias-estado">Cargando categorías...</p>;
    if (error) return <p className="categorias-estado categorias-error">Error: {error}</p>;

    return (
        <div className="categorias-container">
            <h2 className="categorias-titulo">Categorías de Comidas</h2>
            <div className="categorias-grid">
                {categorias.map((cat) => (
                    <div key={cat.idCategory} className="categoria-card">
                        <img
                            src={cat.strCategoryThumb}
                            alt={cat.strCategory}
                            className="categoria-img"
                        />
                        <h3 className="categoria-nombre">{cat.strCategory}</h3>
                        <p className="categoria-desc">
                            {cat.strCategoryDescription.length > 120
                                ? cat.strCategoryDescription.substring(0, 120) + '...'
                                : cat.strCategoryDescription}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Categorias;
