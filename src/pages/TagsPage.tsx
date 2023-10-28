import { Link } from "react-router-dom";
import { allTags as tags, tagCount } from "../data/tags";

const Tags: React.FC = () => {
  return (
    <main className="page tags-page">
      <section className="tags-wrapper">
        {tags.map((tag, index) => {
          return (
            <Link to={`/tags/${tag}`} key={index} className="tag">
              <h5>{tag}</h5>
              <p>{tagCount(tag)} recipe</p>
            </Link>
          );
        })}
      </section>
    </main>
  );
};

export default Tags;
