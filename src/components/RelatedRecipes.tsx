import { Loading, RecipesList } from ".";
import useFetchRecipes from "../hooks/useFetchRecipes";

const RelatedRecipes = () => {
  const { recipes, isLoading } = useFetchRecipes(3);

  if (isLoading) return <Loading center />;

  return (
    <section className="related-recipes">
      <h4>other recipes</h4>
      <div className="related-container">
        <RecipesList recipes={recipes} />
      </div>
    </section>
  );
};

export default RelatedRecipes;
