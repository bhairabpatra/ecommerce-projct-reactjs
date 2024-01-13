import axios from "axios";

const AuthService = {
  fetchData: async (username, password) => {
    const data = {
      username,
      password,
    };
    try {
      const response = await axios.post(
        "https://fakestoreapi.com/auth/login",
        data
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error.message);
      throw error;
    }
  },
};
export default AuthService;
