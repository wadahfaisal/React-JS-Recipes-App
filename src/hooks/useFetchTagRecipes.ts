import { useEffect, useState } from "react";
import customFetch from "../utils/axios";
import { Recipe } from "../types/types";

const useFetchTagRecipes = (tag: string) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const res = await customFetch.get(`/recipes/complexSearch?type=${tag}`);
        setRecipes(res.data.results);
        console.log(res.data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return { recipes, isLoading };
};

export default useFetchTagRecipes;
