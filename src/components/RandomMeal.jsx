import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';

const url = "https://www.themealdb.com/api/json/v1/1";

export const RandomMeal = () => {

    const [iters, setIters] = useState(1);
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        const getRandomMeal = async() => {
            try {
                const response = await axios.get(`${url}/random.php`);
                setMeals([...meals, response.data.meals[0]]);
                setIters(iters + 1);   
            } catch (error) {
                console.log(error);
            }
        }
        if(iters <= 3){
            getRandomMeal();
        }
    }, [iters]);

    return (
        <div>
            {
                meals.length === 0 ? <p>No hay recetas</p> 
                : meals.map(m => (
                    <div key={m.idMeal}>
                        <h5>{m.strMeal}</h5>
                        <p>{m.strArea}</p>
                        <button>Ver mas...</button>
                    </div>
                ))
            }
        </div>
    )
}
