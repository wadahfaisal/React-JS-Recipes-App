import axios from "axios";

const customFetch = axios.create({
  baseURL: "https://api.spoonacular.com",
  params: {
    apiKey: process.env.REACT_APP_SPOONACULAR_API_KEY,
  },
});

export default customFetch;
