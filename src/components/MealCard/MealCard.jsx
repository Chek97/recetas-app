import { Link } from "react-router-dom";

import './meal_card.css';

export const MealCard = ({ meal }) => {

    const { strMeal, strMealThumb, strArea, idMeal } = meal;

    return (
        <div className="random-card">
            <div className="random-card__image">
                <img src={strMealThumb} alt="imagen de receta" />
            </div>
            <div className="random-card__content">
                <h4 className="random-card__title">{strMeal}</h4>
                {strArea && (<p className="random-card__area">Origin: <strong>{strArea}</strong></p>)}
                <Link className="random-card__link" to={`/recipe/${idMeal}`}>
                    <i className="fa fa-eye" aria-hidden="true"></i> Ver Mas
                </Link>
            </div>
        </div>
    )
}
