import React, { createContext } from 'react';

const AuthContex = createContext();

const AuthProvider = () => {
  return <AuthContex.Provider value=''></AuthContex.Provider>;
};

export default AuthProvider;
