import { RecipeIngredients, RecipeInstructions } from ".";
import { RecipeContentProps as Props } from "../types/porpsTypes";

const RecipeContent = ({ ingredients, recipeId }: Props) => {
  return (
    <section className="recipe-content">
      <RecipeInstructions recipeId={recipeId} />
      <RecipeIngredients ingredients={ingredients} />
    </section>
  );
};

export default RecipeContent;
