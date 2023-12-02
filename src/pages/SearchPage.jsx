import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const url = "https://www.themealdb.com/api/json/v1/1";

export const SearchPage = () => {
    
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setSearch(e.target.value);
        setLoading(true);
        getRecetName(e.target.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(search);
    }
    
    const getRecetName = async(name) => {
        try {
            const response = await axios.get(`${url}/search.php?s=${name}`);
            console.log(response.data);
            setResults(response.data.meals);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    }

    const getMealData = (id) => {
        navigate(`/recipe/${id}`);
    }
    
    return (
        <div>
            <header>
                <h1>Buscar Receta</h1>
            </header>
            <form onSubmit={handleSubmit}>
                <p>Escribe una receta por su nombre</p>
                <div>
                    <input 
                        type="search"
                        name="search"
                        onChange={handleChange}
                        placeholder="Nombre de la receta"
                        value={search} 
                    />
                </div>
                <div>
                    <button type="submit">Buscar</button>
                </div>
            </form>
            {loading ? <p>Cargando....</p> : (
                results === null ? <p>No se encontro respuesta</p> : (
                    results.map(r => (
                        <div>
                            {r.strMeal}
                            <button onClick={() => getMealData(r.idMeal)}>Ver mas...</button>
                        </div>
                    ))
                )
            )}
        </div>
    )
}
