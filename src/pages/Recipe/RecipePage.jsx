import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ClockLoader from "react-spinners/ClockLoader";
import axios from "axios";

import { Navbar } from "../../components";

import './recipe_page.css';

const url = "https://www.themealdb.com/api/json/v1/1";

export const RecipePage = () => {

    const { id } = useParams();

    const [meal, setMeal] = useState({});
    const [loading, setLoading] = useState(true);

    let ingredientsList = [];

    for (let i = 1; i <= 20; i++) {
        let ingredient = `strIngredient${i}`;
        if (meal[ingredient] !== "") {
            ingredientsList.push(meal[ingredient]);
        }
    }

    useEffect(() => {
        const getMeal = async () => {
            try {
                const response = await axios.get(`${url}/lookup.php?i=${id}`);
                setMeal(response.data.meals[0]);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        }
        getMeal();
    }, []);

    if (loading) {
        return (
            <div className="random__loader">
                <ClockLoader
                    color="#547410"
                    size={100}
                    cssOverride={{}}
                    loading={true}
                    speedMultiplier={1}
                />
            </div>
        )
    }

    return (
        <div className="recipe">
            <Navbar />
            <div className="recipe__image">
                <img src={meal.strMealThumb} alt={meal.strMeal} />
            </div>
            <div className="recipe__content">
                <h1 className="recipe__title--h1">{meal.strMeal}</h1>
                <p className="recipe__text">Categoria: <strong>{meal.strCategory}</strong></p>
                <p className="recipe__text">Pais de origen: <strong>{meal.strArea}</strong></p>
                <h2 className="recipe__title--h2">Ingredientes</h2>
                <ul className="recipe__list">
                    {ingredientsList.map((ing, idx) => (
                        <li key={idx} className="recipe__list__item">{ing}</li>
                    ))}
                </ul>
                <h2 className="recipe__title--h2">Instrucciones para preparar</h2>
                <p className="recipe__text__instructions">{meal.strInstructions}</p>
            </div>
        </div>
    )
}
