import React, { useState, createContext } from "react";
import firebase from "firebase/app";
import { User } from "firebase/firebase-auth";
import { AuthContext } from "app/context/AuthContext";

/*
export interface User {
  email: string;
  authToken?: string;
}
*/

/*
interface AuthContext {
  user: User | null;
  setUser: (user: User | null) => void;
}
*/

export const AuthenticatedUserContext = createContext<User | null>(null);

export const AuthenticatedUserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <AuthenticatedUserContext.Provider value={{ user, setUser }}>
      {children}
    </AuthenticatedUserContext.Provider>
  );
};
