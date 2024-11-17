import { RecipeIngredientsProps as Props } from "../types/porpsTypes";

const RecipeIngredients = ({ ingredients }: Props) => {
  return (
    <article className="second-column">
      <div>
        <h4>ingredients & measures</h4>
        {ingredients?.map((ingredient) => {
          const {
            id,
            name,
            amount,
            unit,
            // , aisle, image,  originalName
          } = ingredient;
          return (
            <p className="single-ingredient" key={id}>
              {name}: {amount} {unit}
            </p>
          );
        })}
      </div>
      {/* <div>
              <h4>tools</h4>
              {tools.map((tool, index) => {
                return (
                  <p className="single-tool" key={index}>
                    {tool}
                  </p>
                );
              })}
            </div> */}
    </article>
  );
};

export default RecipeIngredients;
