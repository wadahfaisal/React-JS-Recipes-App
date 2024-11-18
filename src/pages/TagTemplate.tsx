import { Loading, RecipesList } from "../components";
import { useParams } from "react-router-dom";
import useFetchTagRecipes from "../hooks/useFetchTagRecipes";

const TagTemplate: React.FC = () => {
  const { tag } = useParams();
  const { recipes, isLoading } = useFetchTagRecipes(tag!);

  if (isLoading) return <Loading center />;

  return (
    <main className="page">
      <section>
        <h4>{tag}</h4>
        <RecipesList recipes={recipes} />
      </section>
    </main>
  );
};

export default TagTemplate;
