import { ExtendedIngredient, Recipe } from "./types";

export type RecipesListProps = {
  recipes: Recipe[];
};

export type RecipeHeroProps = {
  recipe: Recipe;
};

export type NavLinksProps = {
  showSidebar: boolean;
};

export type RecipeContentProps = {
  ingredients: ExtendedIngredient[];
  recipeId: number;
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
  recipeId: number;
};