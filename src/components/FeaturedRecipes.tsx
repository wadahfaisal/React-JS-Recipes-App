import { Loading, RecipeCard } from ".";
import useFetchRecipes from "../hooks/useFetchRecipes";

const FeaturedRecipes = () => {
  const { recipes, isLoading } = useFetchRecipes(3);

  if (isLoading) return <Loading center />;

  return (
    <section className="featured-recipes">
      <h5 className="featured-title">look at this awesomesouce</h5>
      <div className="recipes-list">
        {recipes?.map((recipe) => {
          return <RecipeCard key={recipe.id} {...recipe} />;
        })}
      </div>
    </section>
  );
};

export default FeaturedRecipes;
