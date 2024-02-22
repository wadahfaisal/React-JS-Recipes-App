import { RecipesList } from "../components";
import { useParams } from "react-router-dom";
import { recipes } from "../data/recipes";
import { useEffect, useState } from "react";
import axios from "axios";

const TagTemplate: React.FC = () => {
  const { tag: tagParam } = useParams();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://www.themealdb.com/api/json/v1/1/filter.php?c=${tagParam}`
        );
        setRecipes(res.data.meals);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  // const filteredRecipes = recipes.filter((recipe) => {
  //   const { tags } = recipe;

  //   if (tags.find((tag) => tag === tagParam)) {
  //     return recipe;
  //   }
  // });

  return (
    <main className="page">
      <section>
        <h4>{tagParam}</h4>
        <RecipesList recipes={recipes} />
      </section>
    </main>
  );
};

export default TagTemplate;
