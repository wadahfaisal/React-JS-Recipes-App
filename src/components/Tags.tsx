import { Link } from "react-router-dom";

import { allTags, tagCount } from "../data/tags";
import { useState } from "react";
const Tags: React.FC = () => {
  const [tags, setTags] = useState(allTags);

  return (
    <div className="tags-container">
      <h4>recipes</h4>
      <div className="tags-list">
        {tags.map((tag, index) => (
          <Link to={`/tags/${tag}`} key={index}>
            {tag} ({tagCount(tag)})
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Tags;
