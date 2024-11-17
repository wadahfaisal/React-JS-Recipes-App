import { Recipe } from "../types/types";
import customFetch from "../utils/axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Loading,
  RecipeContent,
  RecipeHero,
  // RecipeTags,
  RelatedRecipes,
} from "../components";

const SingleRecipe: React.FC = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({} as Recipe);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setisLoading(true);
      try {
        const res = await customFetch.get(`/recipes/${id}/information`);
        setRecipe(res.data);
        setisLoading(false);
      } catch (error) {
        console.log(error);
        setisLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return (
    <main className="page recipe-page">
      {isLoading ? (
        <Loading center />
      ) : (
        <div>
          <RecipeHero recipe={recipe} />
          <RecipeContent
            ingredients={recipe.extendedIngredients}
            recipeId={id as string}
          />
          <RelatedRecipes />
        </div>
      )}
    </main>
  );
};

export default SingleRecipe;
