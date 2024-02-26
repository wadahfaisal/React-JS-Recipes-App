import { RecipeIngredients, RecipeInstructions } from ".";

const RecipeContent = ({ ingredients, recipeId }) => {
  return (
    <section className="recipe-content">
      <RecipeInstructions recipeId={recipeId} />
      <RecipeIngredients ingredients={ingredients} />
    </section>
  );
};

export default RecipeContent;
