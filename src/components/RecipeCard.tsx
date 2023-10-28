import { Link } from "react-router-dom";
import { Recipe } from "../data/recipes";

const RecipeCard: React.FC<Recipe> = ({ id, name, prep, cook, image }) => {
  return (
    <article className="recipe-card">
      <Link to={`/single-recipe/${id}`}>
        <img src={image} alt={name} className="img recipe-img" />
        <h5>{name}</h5>
        <p>
          Prep: {prep}min | Cook: {cook}min
        </p>
      </Link>
    </article>
  );
};

export default RecipeCard;
