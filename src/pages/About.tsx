import { recipes } from "../data/recipes";
import { RecipeCard } from "../components";
import { Link } from "react-router-dom";
import aboutImg from "../assets/about.jpeg";

const About: React.FC = () => {
  return (
    <main className="page about-page">
      <section className="info">
        <article>
          <h2>lorem ipsum dolor sit amet consectetur.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            excepturi molestias nihil autem ipsum deleniti ipsam qui eaque saepe
            soluta.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae,
            possimus?
          </p>
          <Link to="/contact" className="btn">
            contact
          </Link>
        </article>
        <img src={aboutImg} alt="pouring salt" className="img about-img" />
      </section>
      <section className="featured-recipes">
        <h5 className="featured-title">look at this awesomesouce</h5>
        <div className="recipes-list">
          {recipes.slice(0, 3).map((recipe) => {
            return <RecipeCard key={recipe.id} {...recipe} />;
          })}
        </div>
      </section>
    </main>
  );
};

export default About;
