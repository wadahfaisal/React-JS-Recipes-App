import { Link } from "react-router-dom";

import { allTags, tagCount } from "../data/tags";
import { useState, useEffect } from "react";
import axios from "axios";
const Tags: React.FC = () => {
  const [tags, setTags] = useState(allTags);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "http://www.themealdb.com/api/json/v1/1/categories.php"
        );
        setData(res.data.categories);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="tags-container">
      <h4>recipes</h4>
      <div className="tags-list">
        {data.map((category, index) => {
          const { strCategory } = category;
          return (
            <Link to={`/tags/${strCategory}`} key={index}>
              {strCategory}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Tags;
