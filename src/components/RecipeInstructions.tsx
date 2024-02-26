import axios from "axios";
import { useEffect, useState } from "react";

const RecipeInstructions = ({ recipeId }) => {
  const [instructions, setInstructions] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `/api/recipes/${recipeId}/analyzedInstructions`,
          {
            params: {
              apiKey: "c3c7873a87624d9c8ce50026c91cac45",
            },
          }
        );
        setInstructions(res.data[0].steps);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <article>
      <h4>instructions</h4>
      {instructions?.map((instruction) => {
        const { number, step, equipment } = instruction;

        return (
          <div className="single-instruction" key={number}>
            <header>
              {/* <p>step {index}</p> */}
              <p>step {number}</p>
              <div></div>
            </header>
            <p>{step}</p>
          </div>
        );
      })}
    </article>
  );
};

export default RecipeInstructions;
