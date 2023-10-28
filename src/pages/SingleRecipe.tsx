import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock as clock1,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import { faClock as clock2 } from "@fortawesome/free-regular-svg-icons";
import { useParams, Link } from "react-router-dom";
import { recipes, Recipe } from "../data/recipes";

const SingleRecipe: React.FC = () => {
  const { id } = useParams();

  const {
    name,
    prep,
    cook,
    servings,
    image,
    tags,
    description,
    instructions,
    ingredients,
    tools,
  } = recipes.find((recipe) => recipe.id === Number(id));

  return (
    <main className="page recipe-page">
      <div>
        <section className="recipe-hero">
          <img src={image} alt={name} className="img recipe-hero-img" />
          <article className="recipe-info">
            <h2>{name}</h2>
            <p>{description}</p>
            <div className="recipe-icons">
              <article>
                <FontAwesomeIcon icon={clock1} className="fas" />
                <h5>prep time</h5>
                <p>{prep} min.</p>
              </article>
              <article>
                <FontAwesomeIcon icon={clock2} className="fas" />
                <h5>cook time</h5>
                <p>{cook} min.</p>
              </article>
              <article>
                <FontAwesomeIcon icon={faUserFriends} className="fas" />
                <h5>servings</h5>
                <p>{servings} servings</p>
              </article>
            </div>
            <div className="recipe-tags">
              Tags:
              {tags.map((tag, index) => {
                return (
                  <Link to="/tags/123" key={index}>
                    {tag}
                  </Link>
                );
              })}
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
              {tools.map((tool, index) => {
                return (
                  <p className="single-tool" key={index}>
                    {tool}
                  </p>
                );
              })}
            </div>
          </article>
        </section>
      </div>
    </main>
  );
};

export default SingleRecipe;
