import axios from "axios";
import { useEffect, useState } from "react";

const url = "https://www.themealdb.com/api/json/v1/1";

export const MealsList = () => {

    const [list, setList] = useState([]);

    useEffect(() => {
        const getMeals = async() => {
            try {
                const response = await axios.get(`${url}/list.php?c=list`);
                setList(response.data.meals);
            } catch (error) {
                console.log(error);
            }
        }

        getMeals();
    }, []);

    const getMealsByList = async(categoryName) => {
        try {
            const response = await axios.get(`${url}/filter.php?c=${categoryName}`);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    const handleSelect = (category) => {
        getMealsByList(category);
    }

    return (
        <div>
            <h2>Selecciona una categoria</h2>
            {
                list.length === 0 ? <p>Error</p> : (
                    <ul>
                        {list.map((category, idx) => (
                            <li key={idx} onClick={() => handleSelect(category.strCategory)}>{category.strCategory}</li>
                        ))}
                    </ul>
                )
            }
        </div>
    )
}
