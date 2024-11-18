import { Tags, RecipesList, Loading } from "../components";
import useFetchRecipes from "../hooks/useFetchRecipes";

const Recipes = () => {
  const { recipes, isLoading } = useFetchRecipes(12);

  if (isLoading) return <Loading center />;

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
