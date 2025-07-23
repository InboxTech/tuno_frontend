import { createContext, useContext, useEffect, useMemo, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  // const [user, setUser] = useState("");
  const [loading, setLoading] = useState(false);
  const [services, setServices] = useState([]);

 const authorizationToken = useMemo(() => `Bearer ${token}`, [token]);

  console.log(authorizationToken);
  const API = import.meta.env.VITE_APP_API_TUNO_URL;

  const storeTokenInLs = (serverToken) => {
    setToken(serverToken);
    setIsLoggedIn(true);
    return localStorage.setItem("token", serverToken);
  };

  const logoutUser = () => {
    localStorage.removeItem("token");
    setToken("");
    setIsLoggedIn(false);
  };

  // jwt authentication ==> to get the login user data
//   const userAuthentication = async () => {
//   try {
//     setLoading(true);
//     const response = await fetch(`${API}/api/auth/user`, {
//       method: "GET",
//       headers: {
//         Authorization: authorizationToken,
//       },
//     });

//     const data = await response.json();
//     if (response.ok) {
//       console.log(data.userData, "user data =>>");
//       setUser(data.userData);
//       setIsLoggedIn(true); 
//     } else {
//       setIsLoggedIn(false); 
//     }

//     setLoading(false);
//   } catch (error) {
//     console.log("Error fetching data", error);
//     setIsLoggedIn(false); 
//     setLoading(false);
//   }
// };


//get all services
const getAllServices = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API}/api/admin/service/getService`, {
        method: "GET",
        // headers: {
        //   Authorization: authorizationToken,
        // },
      });

      if (response.ok) {
        const data = await response.json();
        setServices(Array.isArray(data) ? data : []);
      } else {
        throw new Error("Failed to fetch services");
      }
    } catch (error) {
      console.error("Services Error:", error);
      toast.error(error.message || "Error fetching services");
    } finally {
      setLoading(false);
    }
  };

 

useEffect(() => {
  const checkAuth = async () => {
    // await userAuthentication();
  };
  checkAuth();
   getAllServices();
}, []);

  return (
    <AuthContext.Provider
      value={{
        storeTokenInLs,
        logoutUser,
        isLoggedIn,
        token,
        authorizationToken,
        API, services ,loading
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
