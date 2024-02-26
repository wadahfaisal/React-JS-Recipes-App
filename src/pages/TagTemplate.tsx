import { RecipesList } from "../components";
import { useParams } from "react-router-dom";
import { recipes } from "../data/recipes";
import { useEffect, useState } from "react";
import axios from "axios";

const TagTemplate: React.FC = () => {
  const { tag } = useParams();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/recipes/complexSearch?type=${tag}`, {
          params: {
            apiKey: "c3c7873a87624d9c8ce50026c91cac45",
          },
        });

        setRecipes(res.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

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
