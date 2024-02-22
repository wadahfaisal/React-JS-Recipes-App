import { Link } from "react-router-dom";
import { allTags as tags, tagCount } from "../data/tags";
import { useEffect, useState } from "react";
import axios from "axios";

const Tags: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "http://www.themealdb.com/api/json/v1/1/categories.php"
        );
        setData(res.data.categories);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  let categories = [];

  data.forEach((category) => {
    categories.push(category.strCategory);
  });

  console.log(categories);
  return (
    <main className="page tags-page">
      <section className="tags-wrapper">
        

        {categories.map((tag, index) => {
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
