// App.js
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/css/fontawesome.min.css";
// requred libraries
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Preloader from "./components/Preloader";
// Pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Service from './Pages/Service'
import Servicedetails from './Pages/Servicedetails'
import Contact from "./Pages/Contact";
import Blog from "./Pages/Blog";
import BlogDetails from "./Pages/BlogDetails";
import ProjectDetails from "./Pages/ProjectDetails";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Error from "./Pages/Error";
import TeamDetails from "./Pages/TeamDetails";
import Logout from "./Pages/Logout";
import Career from "./Pages/Career";
import CareerDetails from "./Pages/CareerDetails";
import { ToastContainer } from "react-toastify";
import Project from "./Pages/Project";
import IndustryDetails from "./Pages/IndustryDetails"
import Layout from "./components/Layout "
import 'react-toastify/dist/ReactToastify.css'



// import other components/pages as needed

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Define your router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "project/:id", element: <ProjectDetails /> },
      { path: "blog", element: <Blog /> },
      { path: "blog/:id", element: <BlogDetails /> },
      { path: "career", element: <Career /> },
      { path: "career-details/:id", element: <CareerDetails /> },
      { path: "service", element: <Service /> },
      { path: "service-details/:id", element: <Servicedetails /> },
      { path: "industry-details/:id", element: <IndustryDetails /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
      { path: "team-details", element: <TeamDetails /> },
      { path: "project", element: <Project /> },
    ],
  },
  {
    path: "/logout",
    element: <Logout />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);


  return (
    <>
    <ToastContainer position="top-right" autoClose={3000} />
      <RouterProvider router={router} />
      <Preloader />
     
    </>
  );
}
  
export default App;
