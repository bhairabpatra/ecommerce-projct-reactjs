import axios from "axios";

const API_BASE_URL = "https://fakestoreapi.com";

const AuthService = {

  validLogin: async (username, password) => {
    const data = {
      username,
      password,
    };
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/login`, data);
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error.message);
      throw error;
    }
  },

  getUsers: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/users`);
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error.message);
      throw error;
    }
  }
};
export default AuthService;
