import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";

const getUsers = async () => {
  const response = await axios.get(`${BASE_URL}/users`);
  return response;
};

export { getUsers };