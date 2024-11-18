import { ExtendedIngredient, Recipe } from "./types";

export type RecipesListProps = {
  recipes: Recipe[];
};

export type RecipeHeroProps = {
  recipe: Recipe;
};

export type NavLinksProps = {
  showSidebar: boolean;
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

export type RecipeContentProps = {
  ingredients: ExtendedIngredient[];
  recipeId: string;
};

export type RecipeCardProps = {
  id: number;
  title: string;
  image: string;
  readyInMinutes?: number;
  servings?: number;
  cookingMinutes?: number;
};

export type RecipeIngredientsProps = {
  ingredients: ExtendedIngredient[];
};

export type RecipeInstructionsProps = {
  recipeId: string;
};

export type FormRowProps = {
  labelText?: string;
  name: string;
  type: "text" | "email" | "text-area";
};
