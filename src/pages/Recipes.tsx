import { Tags, RecipesList } from "../components";
import { recipes } from "../data/recipes";

const Recipes: React.FC = () => {
  return (
    <main className="page recipes-page">
      <section className="recipes-container">
        <Tags />
        <RecipesList recipes={recipes} />
      </section>
    </main>
  );
};

export default Recipes;
