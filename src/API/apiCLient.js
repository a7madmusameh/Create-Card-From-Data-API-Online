import axios from "axios";

const baseUrl = "https://jsonplaceholder.typicode.com";
const apiCLient = {
  posts: {
    getPosts: async () => {
      const { data } = await axios.get(`${baseUrl}/posts`);
      return data;
    },
  },
  users: {
    getUsers: async () => {
      const { data } = await axios.get(`${baseUrl}/users`);
      return data;
    },
  },
};

export default apiCLient;
