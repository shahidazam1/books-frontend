import axios from "axios";

export const http = axios.create({
  baseURL:
    process.env.NODE_ENV == "development"
      ? process.env.NEXT_APP_API_URL_DEV
      : process.env.NEXT_APP_API_URL_PROD,
  headers: {
    "Content-Type": "application/json",
  },
});

http.interceptors.response.use(
  function (response) {
    return response;
  },
  function (err) {
    if (err.message === "Network Error") {
      alert("Network Error");
    }
    if (
      err.response.data.statusCode === 401 &&
      err.response.config.method === "get"
    ) {
      localStorage.clear();
      window.location.href = "/login";
    }
    return Promise.reject(err);
  }
);
