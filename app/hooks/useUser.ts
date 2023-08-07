import { useContext } from "react";
import { AuthContext } from "app/context/AuthContext";
import { useLocalStorage } from "./useLocalStorage";
import { User } from "app/types/User";

export const useUser = () => {
  const { user, setUser } = useContext(AuthContext);
  const { setItem } = useLocalStorage();

  const addUser = (user: User) => {
    setUser(user);
    setItem("user", JSON.stringify(user));
  };

  const removeUser = () => {
    setUser(null);
    setItem("user", "");
  };

  return { user, addUser, removeUser };
};
