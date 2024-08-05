import { api } from "./api";

const url = "users";

export const getAll = () => {
  return api.get(`${url}/`);
};

export const getById = (id: number) => {
  return api.get(`${url}/${id}`);
};
