import { useEffect, useState } from "react";
import { Recipe } from "../types/types";
import customFetch from "../utils/axios";

const useFetchSingleRecipe = (id: string) => {
  const [recipe, setRecipe] = useState({} as Recipe);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setisLoading(true);
      try {
        const res = await customFetch.get(`/recipes/${id}/information`);
        setRecipe(res.data);
        setisLoading(false);
      } catch (error) {
        console.log(error);
        setisLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return { recipe, isLoading };
};

export default useFetchSingleRecipe;
