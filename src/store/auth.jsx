    import { createContext, useContext, useEffect,  } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const API = import.meta.env.VITE_APP_API_TUNO_URL;

  useEffect(() => {

  }, []);

  return (
    <AuthContext.Provider
      value={{
   API
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
