import { Link } from "react-router-dom";
import { allTags, tagCount } from "../data/tags";
import { useState, useEffect } from "react";
import axios from "axios";
import { tagList } from "../data/tags";

const Tags = () => {
  // const [tags, setTags] = useState(allTags);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "/api/recipes/complexSearch?type=main course",
          {
            params: {
              apiKey: "c3c7873a87624d9c8ce50026c91cac45",
            },
          }
        );
        setData(res.data.categories);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    // fetchData();
  }, []);

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
