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
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop "
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
import Project from "./Pages/Project";



// import other components/pages as needed

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Define your router
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <Home />
          <Footer />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <Header />
          <About />
          <Footer />
        </>
      ),
    },
     {
      path: "/contact",
      element: (
        <>
          <Header />
          <Contact />
          <Footer />
        </>
      ),
    },
     {
      path: "/project-details",
      element: (
        <>
          <Header />
          <ProjectDetails />
          <Footer />
        </>
      ),
    },
     {
      path: "/blog-details",
      element: (
        <>
          <Header />
          <BlogDetails />
          <Footer />
        </>
      ),
    },
     {
      path: "/blog",
      element: (
        <>
          <Header />
          <Blog />
          <Footer />
        </>
      ),
    },
     {
      path: "/service",
      element: (
        <>
          <Header />
          <Service />
          <Footer />
        </>
      ),
    },
     {
      path: "/service-details",
      element: (
        <>
          <Header />
          <Servicedetails />
          <Footer />
        </>
      ),
    },
     {
      path: "/login",
      element: (
        <>
          <Header />
          <Login />
         
        </>
      ),
    },
     {
      path: "/signup",
      element: (
        <>
          <Header />
          <Signup />
         
        </>
      ),
    },
    {
      path: "/team-details",
      element: (
        <>
           <Header />
          <TeamDetails />
          <Footer/>
        </>
      ),
    },
     {
      path: "/project",
      element: (
        <>
           <Header />
          <Project />
          <Footer/>
        </>
      ),
    },
    {
      path: "*",
      element: (
        <>

          <Error />
         
        </>
      ),
    },
     {
      path: "/logout",
      element: (
        <>

        <Logout />
         
        </>
      ),
    },
    
    // add more routes here
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <ScrollToTop />
      <Preloader />
    </>
  );
}

export default App;
