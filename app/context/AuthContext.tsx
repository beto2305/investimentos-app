import { createContext } from "react";
import { User } from "app/types/User";

interface AuthContext {
  user: User | null;
  setUser: (user: User | null) => void;
  isLoading?: boolean | false;
}

export const AuthContext = createContext<AuthContext>({
  user: null,
  setUser: () => {},
  isLoading: false,
});
