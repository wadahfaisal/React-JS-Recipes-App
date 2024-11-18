import { Loading, RecipesList, Tags } from "../components";
import useFetchRecipes from "../hooks/useFetchRecipes";

const Home = () => {
  const { recipes, isLoading } = useFetchRecipes(6);

  return (
    <main className="page home-page">
      <header className="hero">
        <div className="hero-container">
          <div className="hero-text">
            <h1>Simply Recipes</h1>
            <h4>no fluff, just recipes</h4>
          </div>
        </div>
      </header>
      <section className="recipes-container">
        <Tags />
        {isLoading ? <Loading center /> : <RecipesList recipes={recipes} />}
      </section>
    </main>
  );
};

export default Home;
