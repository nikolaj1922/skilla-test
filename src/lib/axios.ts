import axios from "axios";

export const getCallsRequest = axios.create({
  baseURL: "https://api.skilla.ru/mango",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_AUTH_BEARER_TOKEN}`,
    Accept: "application/json",
  },
});
