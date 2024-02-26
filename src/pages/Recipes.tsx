import { Tags, RecipesList } from "../components";
import { recipes } from "../data/recipes";
import { useEffect, useState } from "react";
import axios from "axios";
const Recipes: React.FC = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "/api/recipes/random?limitLicense=true&include-tags=vegetarian&number=12",
          {
            params: {
              apiKey: "c3c7873a87624d9c8ce50026c91cac45",
            },
          }
        );
        console.log(res.data);
        setRecipes(res.data.recipes);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="page recipes-page">
      <section className="recipes-container">
        <Tags />
        <RecipesList recipes={recipes} />
      </section>
    </main>
  );
};

export default Recipes;
