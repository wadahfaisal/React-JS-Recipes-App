import { Link } from "react-router-dom";
import { RecipeCardProps as Props } from "../types/porpsTypes";

const RecipeCard = ({
  id,
  title,
  image,
  readyInMinutes,
  servings,
  cookingMinutes,
}: Props) => {
  return (
    <article className="recipe-card">
      <Link to={`/single-recipe/${id}`}>
        <img src={image} alt={title} className="img recipe-img" />
        <h5>{title}</h5>
        {readyInMinutes && (
          <p>
            {/* Prep: {readyInMinutes}min | Cook: {cookingMinutes}min */}
            Prep: {readyInMinutes}min | Servings: {servings} servings
          </p>
        )}
      </Link>
    </article>
  );
};

export default RecipeCard;
