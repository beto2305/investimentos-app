import { useEffect, useState } from "react";
import Firebase from "app/config/firebase";

// local imports
import { useUser } from "./useUser";
import { User } from "app/types/User";
import { firebaseErrorMessage } from "app/utils/delay";

export const useAuth = () => {
  const { user, addUser, removeUser } = useUser();
  const [isLoading, setIsLoading] = useState(true);
  const [loginError, setLoginError] = useState("");

  const auth = Firebase.auth();

  useEffect(() => {
    const unsubscribeAuth = auth.onAuthStateChanged(
      async (authenticatedUser) => {
        try {
          await (authenticatedUser
            ? addUser({ email: authenticatedUser.email } as User)
            : removeUser());
          setLoginError("");
        } catch (error) {
          console.error(`useAuth.onAuthStateChanged: ${error}`);
          setLoginError(firebaseErrorMessage(error.code));
        }
        setIsLoading(false);
      }
    );

    // unsubscribe auth listener on unmount
    return unsubscribeAuth;
  }, []);

  const login = async (email, password) => {
    try {
      setIsLoading(true);

      if (email !== "" && password !== "") {
        await auth.signInWithEmailAndPassword(email, password);
      }
    } catch (error) {
      console.error(`useAuth.login: ${error}`);
      setIsLoading(false);
      setLoginError(firebaseErrorMessage(error.code));
    }
  };

  const logout = async () => {
    try {
      setIsLoading(true);
      await auth.signOut();
    } catch (error) {
      console.error(`useAuth.logout: ${error}`);
      setIsLoading(false);
      setLoginError(firebaseErrorMessage(error.code));
    }
  };

  return { user, login, logout, isLoading, loginError };
};
