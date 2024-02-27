import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock as clock1,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import { faClock as clock2 } from "@fortawesome/free-regular-svg-icons";
import { RecipeHeroProps as Props } from "../types/porpsTypes";
import recipeIcons from "../utils/recipeIcons";
import { RecipeTags } from ".";

const RecipeHero = ({ recipe }: Props) => {
  const { image, title, summary, servings } = recipe;

  return (
    <section className="recipe-hero">
      <img src={image} alt={title} className="img recipe-hero-img" />
      <article className="recipe-info">
        <h2>{title}</h2>
        <p>{summary?.substring(0, 500)}...</p>
        <div className="recipe-icons">
          {recipeIcons.map((recipeIcon) => {
            const { id, text, icon, prefix } = recipeIcon;

            return (
              <article key={id}>
                {icon}
                <h5>{text}</h5>
                {/* <p>{prep} min.</p> */}
              </article>
            );
          })}

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
  );
};

export default RecipeHero;
