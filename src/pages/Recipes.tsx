import { Tags, RecipesList } from "../components";
import { useEffect, useState } from "react";
import customFetch from "../utils/axios";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const numOfRecipes = 12;
      try {
        const res = await customFetch.get(
          `/random?limitLicense=true&include-tags=vegetarian&number=${numOfRecipes}`
        );

        setRecipes(res.data.recipes);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

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
