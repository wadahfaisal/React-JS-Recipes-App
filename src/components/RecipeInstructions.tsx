import { useEffect, useState } from "react";
import { RecipeInstructionsProps as Props } from "../types/porpsTypes";
import customFetch from "../utils/axios";
import { InstuctionsStep as Instruction } from "../types/types";

const RecipeInstructions = ({ recipeId }: Props) => {
  const [instructions, setInstructions] = useState([] as Instruction[]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await customFetch.get(`/${recipeId}/analyzedInstructions`);
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
