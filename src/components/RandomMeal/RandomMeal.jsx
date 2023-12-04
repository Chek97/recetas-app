import { useState, useEffect } from "react";
import ClockLoader from "react-spinners/ClockLoader";
import axios from 'axios';

import { MealCard } from "../MealCard/MealCard";

import './random_meal.css';

const url = "https://www.themealdb.com/api/json/v1/1";

export const RandomMeal = () => {

    const [iters, setIters] = useState(1);
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(true);

    // Clock spinner component
    const LoadingSpinner = () => {
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

    // Load 3 random recipes
    useEffect(() => {
        const getRandomMeal = async () => {
            try {
                const response = await axios.get(`${url}/random.php`);
                setMeals([...meals, response.data.meals[0]]);
                setIters(iters + 1);
            } catch (error) {
                console.log(error);
            }
        }
        if (iters <= 3) getRandomMeal();
        if (iters === 3) setLoading(false);

    }, [iters]);

    // if data is not loaded yet, show spinner
    if (loading) {
        return (<LoadingSpinner />);
    }

    // When data is ready show component
    return (
        <div className="random-recipe">
            <h2>Observa Nuestras Recetas Unicas y Como Prepararlas</h2>
            <div className="random-recipe__card">
                {
                    (meals.length === 0)
                        ? <p>No hay recetas</p>
                        : meals.map(meal => (
                            <MealCard
                                key={meal.idMeal}
                                meal={meal}
                            />
                        ))
                }
            </div>
        </div>
    )
}
