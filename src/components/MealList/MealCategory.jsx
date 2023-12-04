
import './meal_category.css';

export const MealCategory = ({ handleSelect, category }) => {

    const { strCategory } = category;

    return (
        <li onClick={() => handleSelect(strCategory)} className="category-meal">
            <p>{strCategory}</p>
        </li>
    )
}
