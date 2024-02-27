import { useEffect, useState } from "react";
import customFetch from "../utils/axios";
import { RecipesList } from ".";
import { Recipe } from "../types/types";

const RelatedRecipes = () => {
  const [recipes, setRecipes] = useState([] as Recipe[]);

  useEffect(() => {
    const fetchData = async () => {
      const numOfRecipes = 3;
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
    <section className="related-recipes">
      <h4>other recipes</h4>
      <div className="related-container">
        <RecipesList recipes={recipes} />
      </div>
    </section>
  );
};

export default RelatedRecipes;
