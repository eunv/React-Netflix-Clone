import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "942e7db2e338e5d8b772152358867e04",
    language: "ko-KR",
  },
});

export default instance;