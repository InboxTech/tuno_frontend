import axios from "axios";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const [projectItems, setProjectItems] = useState([]);
  // const [user, setUser] = useState("");
  const [loading, setLoading] = useState(false);
  const [services, setServices] = useState([]);
  const [blogs, setBlogs] = useState([]);

  const authorizationToken = useMemo(() => `Bearer ${token}`, [token]);

  // console.log(authorizationToken);
  const API = import.meta.env.VITE_APP_API_TUNO_URL;

  const storeTokenInLs = (serverToken) => {
    setToken(serverToken);
    setIsLoggedIn(true);
    return localStorage.setItem("token", serverToken);
  };

  ///// fetch the project data
  const fetchProjects = async () => {
    try {
      const res = await axios.get(`${API}/api/projectData/frontend/projects`);
      setProjectItems(res.data.projects || []);
    } catch (err) {
      console.error("Failed to fetch projects:", err);
    }
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

  // get all blogs
  const getBlogs = async () => {
    try {
      const response = await fetch(`${API}/api/data/blog`, {
        method: "GET",
      });
      if (response.ok) {
        const data = await response.json();
        // console.log(data.msg);
        setBlogs(data.msg);
      }
    } catch (error) {
      console.log("Blogs Frontend error:", error);
    }
  };

  useEffect(() => {
    const checkAuth = async () => {
      // await userAuthentication();
    };
    checkAuth();
    getAllServices();
    fetchProjects();
    getBlogs();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        storeTokenInLs,
        logoutUser,
        projectItems,
        isLoggedIn,
        token,
        authorizationToken,
        API,
        services,
        loading,
        blogs,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
