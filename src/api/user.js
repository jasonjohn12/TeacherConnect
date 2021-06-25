import axios from "axios";

export const loginUserAsync = async (username, password) => {
  try {
    const res = await axios.post("https://localhost:5001/api/auth/login", {
      username,
      password,
    });
    const data = res.data;

    return data;
  } catch (error) {
    console.log("error", error);
  }
};
