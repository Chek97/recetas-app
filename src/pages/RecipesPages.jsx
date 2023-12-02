import { MealsList, RandomMeal } from "../components"

export const RecipesPages = () => {
    return (
        <div>
            {/* Navbar */}
            <header>
                <h1>Recetas App Online</h1>
                <p>Disfruta de la seleccion de recetas que tenemos para ofrecerte</p>
            </header>
            {/* Random 3 meals */}
            <RandomMeal />
            {/* listar por categoria */}
            <MealsList />
        </div>
    )
}
