import { useEffect, useState } from "react";
import customFetch from "../utils/axios";
import { InstuctionsStep as Instruction } from "../types/types";

const useFetchRecipeInstruction = (recipeId: string) => {
  const [instructions, setInstructions] = useState([] as Instruction[]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await customFetch.get(
          `/recipes/${recipeId}/analyzedInstructions`
        );
        setInstructions(res.data[0].steps);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return { instructions };
};

export default useFetchRecipeInstruction;
