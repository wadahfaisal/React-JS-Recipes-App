import { RecipesListProps as Props } from "../types/porpsTypes";
import { Recipe } from "../types/types";
import { RecipeCard } from ".";

const RecipesList = ({ recipes }: Props) => {
  return (
    <div className="recipes-list">
      {recipes.map((recipe: Recipe) => {
        return <RecipeCard key={recipe.id} {...recipe} />;
      })}
    </div>
  );
};

export default RecipesList;
