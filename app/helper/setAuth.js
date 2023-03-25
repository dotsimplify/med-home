import axios from "axios";
export const setAuth = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = token;
    // axios.defaults.headers.common["Access-control-allow-credentials"] = true;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};
