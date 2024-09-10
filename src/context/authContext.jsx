import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const authApiCall = async (url, data, form) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData || "Registration failed");
      }

      const result = await response.json();
      localStorage.setItem("user", JSON.stringify(result));

      // Optionally, you can navigate to a success page or login page
      navigate("/");
    } catch (error) {
      form.setError("root", {
        type: "manual",
        message: error.message || "An error occurred during login",
      });
    }
  };

  const login = (data, form) => {
    authApiCall(
      "http://localhost:3000/login",
      {
        email: data.email,
        password: data.password,
      },
      form
    );
  };

  const register = (data, form) => {
    authApiCall(
      "http://localhost:3000/register",
      {
        name: data.name,
        email: data.email,
        password: data.password,
      },
      form
    );
  };

  const logout = () => {
    localStorage.clear();
    navigate("/auth");
  };

  return (
    <AuthContext.Provider value={{ login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
