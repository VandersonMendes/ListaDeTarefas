
import React, { createContext, useContext, useState } from "react";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { app } from "../services/firebaseConfig";
const AppContext = createContext();
const provider = new GoogleAuthProvider();
import { useNavigate } from "react-router";
export function AppProvider({ children }) {
  const [login, setLogin] = useState<boolean>(false);
  const auth = getAuth(app);
  const navigate = useNavigate()
  const signInGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        localStorage.setItem('auth', JSON.stringify(user))
        if (user && user.emailVerified) navigate('/listTarefas');
        setLogin(user.emailVerified);
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  }
  return (
    <AppContext.Provider value={{ login, setLogin, signInGoogle}}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppProvider() {
  const context = useContext(AppContext);
  return context;
}