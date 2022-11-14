import axios from "axios";

const instance = axios.create({
  baseURL: "http://api.skillsgram.com/api",
});

export default instance;
