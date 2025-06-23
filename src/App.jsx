// App.js
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/css/fontawesome.min.css";
import 'aos/dist/aos.css';

import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AOS from 'aos';

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop "
import Preloader from "./components/Preloader";

// Pages
import Home from "./Pages/Home";
import About from "./components/About";
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
