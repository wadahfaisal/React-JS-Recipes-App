import axios from "axios";

const customFetch = axios.create({
  baseURL: "/api/recipes",
  params: {
    apiKey: "c3c7873a87624d9c8ce50026c91cac45",
  },
});

export default customFetch;
