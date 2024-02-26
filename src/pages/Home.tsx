import { RecipesList, Tags } from "../components";
import { recipes } from "../data/recipes";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "/api/recipes/random?limitLicense=true&include-tags=vegetarian&number=6",
          {
            params: {
              apiKey: "c3c7873a87624d9c8ce50026c91cac45",
            },
          }
        );
        setRecipes(res.data.recipes);
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
