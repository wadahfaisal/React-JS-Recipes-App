import { RecipeCard } from ".";
import { useEffect, useState } from "react";
import axios from "axios";

const FeaturedRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "/api/recipes/random?limitLicense=true&include-tags=vegetarian&number=3",
          {
            params: {
              apiKey: "c3c7873a87624d9c8ce50026c91cac45",
            },
          }
        );
        setRecipes(res.data.recipes);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="featured-recipes">
      <h5 className="featured-title">look at this awesomesouce</h5>
      <div className="recipes-list">
        {recipes?.map((recipe) => {
          return <RecipeCard key={recipe.id} {...recipe} />;
        })}
      </div>
    </section>
  );
};

export default FeaturedRecipes;
