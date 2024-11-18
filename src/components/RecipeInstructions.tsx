import { RecipeInstructionsProps as Props } from "../types/porpsTypes";
import useFetchRecipeInstruction from "../hooks/useFetchRecipeInstruction";

const RecipeInstructions = ({ recipeId }: Props) => {
  const { instructions } = useFetchRecipeInstruction(recipeId);

  return (
    <article>
      <h4>instructions</h4>
      {instructions?.map((instruction) => {
        const {
          number,
          step,
          // , equipment
        } = instruction;

        return (
          <div className="single-instruction" key={number}>
            <header>
              {/* <p>step {index}</p> */}
              <p>step {number}</p>
              <div></div>
            </header>
            <p>{step}</p>
          </div>
        );
      })}
    </article>
  );
};

export default RecipeInstructions;
