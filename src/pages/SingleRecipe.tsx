import { useParams } from "react-router-dom";
import {
  Loading,
  RecipeContent,
  RecipeHero,
  // RecipeTags,
  RelatedRecipes,
} from "../components";
import useFetchSingleRecipe from "../hooks/useFetchSingleRecipe";

const SingleRecipe: React.FC = () => {
  const { id } = useParams();
  const { recipe, isLoading } = useFetchSingleRecipe(id!);

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
