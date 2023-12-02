import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const url = "https://www.themealdb.com/api/json/v1/1";

export const RecipePage = () => {
    
    const { id } = useParams();
    const [meal, setMeal] = useState({});

    useEffect(() => {
        const getMeal = async() => {
            const response = await axios.get(`${url}/lookup.php?i=${id}`);
            setMeal(response.data.meals[0]);
        }
        
        getMeal();
    }, []);
    
    console.log(meal);

    if(meal === {}){
        <p>cargando</p>
    }
    
    return (
        <div>
            <h5>{meal.strMeal}</h5>
            <p>{meal.strInstructions}</p>
        </div>
    )
}
