import { RecipeCard } from ".";
import { useEffect, useState } from "react";
import { Recipe } from "../types/types";
import customFetch from "../utils/axios";

const FeaturedRecipes = () => {
  const [recipes, setRecipes] = useState([] as Recipe[]);
  useEffect(() => {
    const fetchData = async () => {
      const numOfRecipes = 3;
      try {
        const res = await customFetch.get(
          `/recipes/random?limitLicense=true&include-tags=vegetarian&number=${numOfRecipes}`
        );
        setRecipes(res.data.recipes);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

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
