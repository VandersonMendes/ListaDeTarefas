import { createContext, useContext, useState } from "react";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { app } from "../services/firebaseConfig";
import { useNavigate } from "react-router";

interface AppContextType {
  login: boolean;
  setLogin: React.Dispatch<React.SetStateAction<boolean>>;
  signInGoogle: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);
const provider = new GoogleAuthProvider();
export function useAppProvider() {
  const context = useContext(AppContext);
  if(!context){
    throw new Error('useAppContext must be used within an AppContextProvider');
  }
  return context
  }
export function AppProvider({ children }: { children: React.ReactNode }) {
  const [login, setLogin] = useState<boolean>(true);
  const auth = getAuth(app);
  const navigate = useNavigate();

  const signInGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        localStorage.setItem("auth", JSON.stringify(user));
        if (user && user.emailVerified) navigate("/listTarefas");
        setLogin(user.emailVerified);
      })
  };
  
  return (
    <AppContext.Provider value={{ login, setLogin, signInGoogle }}>
      {children}
    </AppContext.Provider>
  );
}



