import { useState, useEffect, useCallback } from "react";
import customFetch from "../utils/axios";

// Custom hook to fetch data
const useFetch = (url: string, options = {}) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  // Callback to fetch data
  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await customFetch.get(url, options);
      setData(response.data);
      setError(null);
    } catch (err) {
      setError((err as Error).message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  }, [url, options]);

  // Fetch data on component mount or when url/options change
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, isLoading, error, refetch: fetchData };
};

export default useFetch;
