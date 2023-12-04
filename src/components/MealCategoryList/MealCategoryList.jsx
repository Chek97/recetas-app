import { useEffect, useState } from "react";
import ClockLoader from "react-spinners/ClockLoader";
import axios from "axios";

import { MealCard } from "../MealCard/MealCard";

import './meal_category_list.css';

const url = "https://www.themealdb.com/api/json/v1/1";

export const MealCategoryList = ({ category }) => {

    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(true);

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

    useEffect(() => {
        const getMealsByList = async (categoryName) => {
            try {
                const response = await axios.get(`${url}/filter.php?c=${categoryName}`);
                setMeals(response.data.meals);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        }
        getMealsByList(category);
    }, [category]);

    if (loading) {
        return (<LoadingSpinner />);
    }

    return (
        <div className="category__meal__list">
            <h2 className="category__meal__list--title">Recetas de: <span>{category}</span></h2>
            <ul className="category__meal__list--list">
                {meals.map(meal => (
                    <MealCard
                        key={meal.idMeal}
                        meal={meal}
                    />
                ))}
            </ul>
        </div>
    )
}
