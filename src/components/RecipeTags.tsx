import { Link } from "react-router-dom";

const RecipeTags = () => {
  return (
    <div className="recipe-tags">
      Tags:
      {/* {customTags.map((tag, index) => {
        return (
          <Link to="/tags/123" key={index}>
            {tag}
          </Link>
        );
      })} */}
    </div>
  );
};

export default RecipeTags;
