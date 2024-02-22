import { Link } from "react-router-dom";
// import { Recipe } from "../data/recipes";

// const RecipeCard: React.FC<Recipe> = ({ id, name, prep, cook, image }) => {

type Props = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
};
const RecipeCard: React.FC<Props> = ({
  idMeal: id,
  strMeal: name,
  strMealThumb: thump,
}) => {
  return (
    <article className="recipe-card">
      <Link to={`/single-recipe/${id}`}>
        <img src={thump} alt={name} className="img recipe-img" />
        <h5>{name}</h5>
        {/* <p>
          Prep: {prep}min | Cook: {cook}min
        </p> */}
      </Link>
    </article>
  );
};

export default RecipeCard;
