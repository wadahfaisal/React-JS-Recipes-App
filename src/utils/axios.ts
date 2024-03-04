import axios from "axios";

const customFetch = axios.create({
  baseURL: "https://api.spoonacular.com",
  params: {
    // apiKey: {process.env.REACT_APP_SPOONACULAR_API_KEY}
    apiKey: "c3c7873a87624d9c8ce50026c91cac45",
  },
});

export default customFetch;
