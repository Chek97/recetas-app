import { useState } from "react";
import { MealCategoryList, MealsList, RandomMeal, Navbar } from "../../components";

import './recipes_page.css';

export const RecipesPages = () => {

    const [active, setActive] = useState(false);
    const [category, setCategory] = useState("");

    return (
        <div className="recipes">
            <Navbar />
            <header className="recipes__header">
                <h1>Recetas App Online</h1>
                <p>Disfruta de la seleccion de recetas que tenemos para ofrecerte</p>
            </header>
            <RandomMeal />
            <MealsList setActive={setActive} setCategory={setCategory} />
            {active && <MealCategoryList category={category} />}
        </div>
    )
}
