import axios from "axios";

const config = {
  baseURL: "https://energytrade.onrender.com/api",
};

export const api = axios.create(config);

export const login = (body) => api.post("/auth/signin", body);

export const signup = (body) => api.post("/auth/signup", body);

export const addOffer = (body) =>
  api.post("/offers", body, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

export const getOffers = () =>
  api.get(`/offers`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
