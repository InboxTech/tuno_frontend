// App.js
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/css/fontawesome.min.css";
import 'aos/dist/aos.css';
// import About from './Pages/About'
import Service from './Pages/Service'
import Signup from './Pages/Signup'
import Servicedetails from './Pages/Servicedetails'
import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AOS from 'aos';

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop "
import Preloader from "./components/Preloader";

// Pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import ProjectDetails from "./Pages/ProjectDetails";
import BlogDetails from "./Pages/BlogDetails";
import Blog from "./Pages/Blog";
import Login from "./Pages/Login";
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
    
    // add more routes here
  ]);

  return (
    <>
      {/* <VoiceTranslaterTabing /> */}
      {/* <Header />
      <Home />
      <About/> */}
      {/* <Service/>
      <Servicedetails /> */}
     
      {/* <Footer /> */}
      <RouterProvider router={router} />
      <ScrollToTop />
      <Preloader />
    </>
  );
}

export default App;
