import axios from "axios";
import { useState } from "react";
import { MealCard } from "../../components/MealCard/MealCard";
import { Navbar } from "../../components/Navbar";
import ClockLoader from 'react-spinners/ClockLoader';

import './search_page.css';

const url = "https://www.themealdb.com/api/json/v1/1";

export const SearchPage = () => {

    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setSearch(e.target.value);
        setLoading(true);
        getRecetName(e.target.value);
    }

    const getRecetName = async (name) => {
        try {
            const response = await axios.get(`${url}/search.php?s=${name}`);
            setResults(response.data.meals);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    }

    const NoResponse = () => (
        <div className="search__response">
            <p>No se encontraron recetas similares</p>
        </div>
    )

    const LoadingSpinner = () => {
        return (
            <div className="random__loader__search">
                <ClockLoader
                    color="#FFF"
                    size={100}
                    cssOverride={{}}
                    loading={true}
                    speedMultiplier={1}
                />
            </div>
        )
    }

    return (
        <div className="search">
            <Navbar />
            <header className="search__header">
                <h1>Buscar Receta</h1>
            </header>
            <form className="search__form">
                <p>Escribe una receta por su nombre</p>
                <div className="search__form__container">
                    <div className="search__form__group">
                        <input
                            type="search"
                            name="search"
                            className="search__form__input"
                            onChange={handleChange}
                            placeholder="Nombre de la receta"
                            value={search}
                        />
                    </div>
                </div>
            </form>
            <div className="search__find">
                {loading
                    ? (<LoadingSpinner />)
                    : (
                        results === null ? (<NoResponse />) : (
                            results.map(meal => (
                                <MealCard
                                    key={meal.idMeal}
                                    meal={meal}
                                />
                            ))
                        )
                    )}
            </div>
        </div>
    )
}
