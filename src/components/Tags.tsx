import { Link } from "react-router-dom";
import { tagList } from "../data/tags";

const Tags = () => {
  return (
    <div className="tags-container">
      <h4>recipes</h4>
      <div className="tags-list">
        {tagList.map((tag, index) => {
          return (
            <Link to={`/tags/${tag}`} key={index}>
              {tag}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Tags;
