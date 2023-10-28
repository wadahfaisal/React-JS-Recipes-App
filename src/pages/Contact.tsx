import { recipes } from "../data/recipes";
import { RecipeCard } from "../components";

const Contact: React.FC = () => {
  return (
    <main className="page contact-page">
      <section className="contact-container">
        <article className="contact-info">
          <h3>want to get in touch?</h3>
          <p>
            Four dollar toast biodiesel plaid salvia actually pickled banjo
            bespoke mlkshk intelligentsia edison bulb synth.
          </p>
          <p>Cardigan prism bicycle rights put a bird on it deep v.</p>
          <p>
            Hashtag swag health goth air plant, raclette listicle fingerstache
            cold-pressed fanny pack bicycle rights cardigan poke.
          </p>
        </article>
        <article>
          <form className="form contact-form">
            <div className="form-row">
              <label htmlFor="name" className="form-label">
                your name
              </label>
              <input type="text" name="name" id="name" className="form-input" />
            </div>
            <div className="form-row">
              <label htmlFor="email" className="form-label">
                your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-input"
              />
            </div>
            <div className="form-row">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="form-textarea"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-block">
              submit
            </button>
          </form>
        </article>
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

export default Contact;
