import { useEffect, useState } from "react";
import customFetch from "../utils/axios";
import { Recipe } from "../types/types";

const useFetchRecipes = (numOfRecipes: number) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const url = `/recipes/random?limitLicense=true&include-tags=vegetarian&number=${numOfRecipes}`;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const res = await customFetch.get(url);
        setRecipes(res.data.recipes);
        console.log(res.data.recipes);
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

export default useFetchRecipes;
