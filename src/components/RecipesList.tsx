import { RecipeCard } from ".";
import { Recipe } from "../data/recipes";

const RecipesList: React.FC<Recipe[]> = ({ recipes }) => {
  return (
    <div className="recipes-list">
      {recipes.map((recipe: Recipe) => {
        return <RecipeCard key={recipe.id} {...recipe} />;
      })}
    </div>
  );
};

export default RecipesList;
