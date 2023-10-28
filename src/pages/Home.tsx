import { RecipesList, Tags } from "../components";
import { recipes } from "../data/recipes";

const Home: React.FC = () => {
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
        <RecipesList recipes={recipes} />
      </section>
    </main>
  );
};

export default Home;
