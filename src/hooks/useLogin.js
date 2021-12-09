import { useState, useEffect } from "react";
import { projectAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const [isCanceled, setIsCanceled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setError(null);
    setIsPending(true);

    // sign user out
    try {
      const res = await projectAuth.signInWithEmailAndPassword(email, password);

      dispatch({ type: "LOGIN", payload: res.user });

      if (!isCanceled) {
        setIsPending(false);
        setError(null);
      }
    } catch (err) {
      if (!isCanceled) {
        setError(err.message);
        console.log(err.message);
        isPending(false);
      }
    }
  };

  useEffect(() => {
    return () => {
      setIsCanceled(true);
    };
  }, []);

  return { login, error, isPending };
};
