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

const SingleRecipe: React.FC = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const res = await axios.get(
    //       `http://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    //     );
    //     setRecipe(res.data.meals[0]);
    //     console.log(res.data.meals[0]);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    const fetchData = async () => {
      try {
        const res = await fetch(
          `http://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
          {
            method: "GET",
          }
        );
        const data = await res.json();
        setRecipe(data.meals[0]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return;

  const {
    strArea,
    strCategory,
    strInstructions: instruction,
    strMeal: name,
    strMealThumb: image,
    strYoutube,
    strTags,
  } = recipe;

  const extractProperties = (array, items: string) => {
    let properties = [];
    for (let i = 1; i <= 20; i++) {
      const property = array[items + i];

      if (property !== "" && property !== " ") {
        properties.push(property);
      }
    }
    return properties;
  };

  const ingredients = extractProperties(recipe, "strIngredient");
  const measures = extractProperties(recipe, "strMeasure");
  const instructions = recipe.strInstructions?.split(".");

  return (
    <main className="page recipe-page">
      <div>
        <section className="recipe-hero">
          <img src={image} alt={name} className="img recipe-hero-img" />
          <article className="recipe-info">
            <h2>{name}</h2>
            <p>{instruction}</p>
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
                {/* <p>{servings} servings</p> */}
              </article>
            </div>
            <div className="recipe-tags">
              Tags:
              {/* {tags.map((tag, index) => {
                return (
                  <Link to="/tags/123" key={index}>
                    {tag}
                  </Link>
                );
              })} */}
            </div>
          </article>
        </section>
        <section className="recipe-content">
          <article>
            <h4>instructions</h4>
            {instructions.map((instruction, index) => {
              return (
                <div className="single-instruction" key={index}>
                  <header>
                    <p>step {index + 1}</p>
                    <div></div>
                  </header>
                  <p>{instruction}</p>
                </div>
              );
            })}
          </article>
          <article className="second-column">
            <div>
              <h4>ingredients</h4>
              {ingredients.map((ingredient, index) => {
                return (
                  <p className="single-ingredient" key={index}>
                    {ingredient}
                  </p>
                );
              })}
            </div>
            <div>
              <h4>tools</h4>
              {/* {tools.map((tool, index) => {
                return (
                  <p className="single-tool" key={index}>
                    {tool}
                  </p>
                );
              })} */}
            </div>
          </article>
        </section>
      </div>
    </main>
  );
};

export default SingleRecipe;
