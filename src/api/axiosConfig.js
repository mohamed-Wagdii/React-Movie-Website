import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "266fa35430a1a599464e4bee16690be8"
  }
});

export default api;
