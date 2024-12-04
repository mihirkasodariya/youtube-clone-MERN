import { useState } from "react";
import axios from "axios";

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  //custom hook for signup
  const signup = async (userData: {
    username: string;
    fullName: string;
    email: string;
    password: string;
    avatar: string;
  }) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        userData
      );
      setLoading(false);
      return response.data;
    } catch (err: any) {
      setError(err.response?.data?.message || "Signup failed");
      setLoading(false);
      throw err;
    }
  };

  //custom hook for login
  const login = async (userData: { email: string; password: string }) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        userData
      );
      localStorage.setItem("token", response.data.token); //saving jwt token into local storage so even after page refresh it dot loose
      localStorage.setItem("user", JSON.stringify(response.data.user)); //saving user into local storage
      setLoading(false);
      return response.data;
    } catch (err: any) {
      setError(err.response?.data?.message || "Login failed");
      setLoading(false);
      throw err;
    }
  };

  return { signup, login, loading, error };
};
