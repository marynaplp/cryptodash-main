import React, { useState, createContext } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signup = async (username, email, password) => {
    try {
      const response = await axios.post(
        'https://cryptodash-main.onrender.com/users/signup',
        { username, email, password }
      );
      setUser(response.data);
    } catch (error) {
      console.error('Signup error:', error);
      throw error;
    }
  };

  const login = async (username, password) => {
    try {
      const response = await axios.post(
        'https://cryptodash-main.onrender.com/users/login',
        { username, password }
      );
      setUser(response.data);
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

