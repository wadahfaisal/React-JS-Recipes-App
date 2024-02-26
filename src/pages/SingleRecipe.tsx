import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock as clock1,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import { faClock as clock2 } from "@fortawesome/free-regular-svg-icons";
import { useParams, Link } from "react-router-dom";
import { recipes, Recipe } from "../data/recipes";
import { useState, useEffect } from "react";
import axios from "axios";
import { RecipeContent, RecipeTags, RelatedRecipes } from "../components";

const SingleRecipe: React.FC = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/recipes/${id}/information`, {
          params: {
            apiKey: "c3c7873a87624d9c8ce50026c91cac45",
          },
        });
        setRecipe(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const {
    title,
    image,
    summary,
    dishTypes,
    extendedIngredients,
    readyInMinutes,
    servings,
  } = recipe;

  return (
    <main className="page recipe-page">
      <div>
        <section className="recipe-hero">
          <img src={image} alt={title} className="img recipe-hero-img" />
          <article className="recipe-info">
            <h2>{title}</h2>
            {/* <p>{strInstructions?.substring(0, 500)}...</p> */}
            <p>{summary?.substring(0, 500)}...</p>
            <div className="recipe-icons">
              <article>
                <FontAwesomeIcon icon={clock1} className="fas" />
                <h5>prep time</h5>
                {/* <p>{prep} min.</p> */}
              </article>
              <article>
                <FontAwesomeIcon icon={clock2} className="fas" />
                <h5>cook time</h5>
                {/* <p>{cook} min.</p> */}
              </article>
              <article>
                <FontAwesomeIcon icon={faUserFriends} className="fas" />
                <h5>servings</h5>
                <p>{servings} servings</p>
              </article>
            </div>
            {/* <RecipeTags /> */}
          </article>
        </section>
        <RecipeContent ingredients={extendedIngredients} recipeId={id} />
        <RelatedRecipes />
      </div>
    </main>
  );
};

export default SingleRecipe;
