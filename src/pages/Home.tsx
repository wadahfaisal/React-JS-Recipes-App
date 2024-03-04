import { RecipesList, Tags } from "../components";
import { useEffect, useState } from "react";
import customFetch from "../utils/axios";

const Home = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const numOfRecipes = 6;
      try {
        const res = await customFetch.get(
          `/random?limitLicense=true&include-tags=vegetarian&number=${numOfRecipes}`
        );
        setRecipes(res.data.recipes);
        console.log(res.data.recipes);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

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
