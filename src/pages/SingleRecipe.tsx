import { Recipe } from "../types/types";
import customFetch from "../utils/axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  RecipeContent,
  RecipeHero,
  RecipeTags,
  RelatedRecipes,
} from "../components";

const SingleRecipe: React.FC = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({} as Recipe);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await customFetch.get(`/${id}/information`);
        setRecipe(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const {
    title,
    image,
    summary,
    dishTypes,
    extendedIngredients,
    readyInMinutes,
    servings,
  } = recipe;

  return (
    <main className="page recipe-page">
      <div>
        <RecipeHero recipe={recipe} />
        <RecipeContent ingredients={extendedIngredients} recipeId={id} />
        <RelatedRecipes />
      </div>
    </main>
  );
};

export default SingleRecipe;
