import { useEffect, useState } from "react";
import ClockLoader from "react-spinners/ClockLoader";
import axios from "axios";

import { MealCategory } from "./MealCategory";

import './category_list.css';

const url = "https://www.themealdb.com/api/json/v1/1";

export const MealsList = ({ setActive, setCategory }) => {

    const [list, setList] = useState([]);
    const [loadingCategory, setLoadingCategory] = useState(true);


    const handleSelect = (category) => {
        setCategory(category);
        setActive(true);
    }

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
        const getMeals = async () => {
            try {
                const response = await axios.get(`${url}/list.php?c=list`);
                setList(response.data.meals);
                setLoadingCategory(false);
            } catch (error) {
                console.log(error);
            }
        }
        getMeals();
    }, []);


    return (
        <div className="category-list">
            <h2 className="category-list__header">Selecciona una categoria</h2>
            {
                loadingCategory ? (<LoadingSpinner />) : (
                    list.length === 0
                        ? <p>Ha ocurrido un error al cargar la informacion</p>
                        : (<ul className="category-list__list">
                            {list.map((category, idx) => (
                                <MealCategory
                                    key={idx}
                                    handleSelect={handleSelect}
                                    category={category}
                                    id={idx}
                                />
                            ))
                            }
                        </ul>)
                )
            }
        </div>
    )
}
