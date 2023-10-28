import { RecipesList } from "../components";
import { useParams } from "react-router-dom";
import { recipes } from "../data/recipes";

const TagTemplate: React.FC = () => {
  const { tag: tagParam } = useParams();

  const filteredRecipes = recipes.filter((recipe) => {
    const { tags } = recipe;

    if (tags.find((tag) => tag === tagParam)) {
      return recipe;
    }
  });

  return (
    <main className="page">
      <section>
        <h4>{tagParam}</h4>
        <RecipesList recipes={filteredRecipes} />
      </section>
    </main>
  );
};

export default TagTemplate;
