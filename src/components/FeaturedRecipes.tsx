import { recipes } from "../data/recipes";
import { RecipeCard } from ".";
import React from "react";

interface Props {
  allRecipes: boolean;
}
const FeaturedRecipes: React.FC<Props> = ({ allRecipes }) => {
  return (
    <section className="featured-recipes">
      <h5 className="featured-title">look at this awesomesouce</h5>
      <div className="recipes-list">
        {allRecipes
          ? recipes.map((recipe) => {
              return <RecipeCard key={recipe.id} {...recipe} />;
            })
          : recipes.slice(0, 3).map((recipe) => {
              return <RecipeCard key={recipe.id} {...recipe} />;
            })}
      </div>
    </section>
  );
};

export default FeaturedRecipes;
