import { Link } from "react-router-dom";
import { tagList } from "../data/tags";

const Tags = () => {
  return (
    <main className="page tags-page">
      <section className="tags-wrapper">
        {tagList.map((tag, index) => {
          return (
            <Link to={`/tags/${tag}`} key={index} className="tag">
              <h5>{tag}</h5>
              {/* <p>{tagCount(tag)} recipe</p> */}
            </Link>
          );
        })}
      </section>
    </main>
  );
};

export default Tags;
