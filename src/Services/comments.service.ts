import { api } from "./api";

const url = "comments";

export const getAll = () => {
  return api.get(`${url}/`);
};
