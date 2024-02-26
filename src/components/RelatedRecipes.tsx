import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const RelatedRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "/api/recipes/random?limitLicense=true&include-tags=vegetarian&number=4",
          {
            params: {
              apiKey: "c3c7873a87624d9c8ce50026c91cac45",
            },
          }
        );
        // console.log(res.data);
        setRecipes(res.data.recipes);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="related-recipes">
      <h4>other recipes</h4>
      <div className="related-container">
        {recipes?.map((recipe) => {
          const { id, title, image, readyInMinutes, servings, cookingMinutes } =
            recipe;
          return (
            <Link to={`/single-recipe/${id}`}>
              <div className="related-recipe">
                <img src={image} alt={title} />
                <h5>{title}</h5>
                {/* <p>
                  Prep: {readyInMinutes}min <br /> Servings: {servings} servings
                </p> */}
                <p>Prep: {readyInMinutes}min</p>
                <p>Servings: {servings} servings</p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default RelatedRecipes;
