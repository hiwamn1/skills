// import axios from "axios";
import axios from '../api/apiUrls'
import { getToken } from "../local-storage/LocalStorage";
import {token} from '../local-storage/KeysLocalStorage'

 async function get(url) {
  axios.defaults.headers.common = { Authorization: `${getToken(token)}` };
  let result = null;
  await axios
    .get(url)
    .then((response) => (result = response.data))
    .catch((error) => (result = error.response.data));
  if (result.code != 403) return result;
  else {
    window.location.href = "/login";
  }
}

 async function post(url, data) {
  axios.defaults.headers.common = { Authorization: `${getToken(token)}` };
  let result = null;
  await axios
    .post(url, data)
    .then((response) => (result = response.data))
    .catch((error) => (result = error.response.data));
  if (result.code != 403) return result;
  else {
    window.location.href = "/login";
  }
}

export const api = { get, post };
