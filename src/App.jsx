import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home";
import Header from "./components/Header";
import "./assets/css/style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/css/fontawesome.min.css";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop ";
import Preloader from "./components/Preloader";
import AOS from 'aos';
import 'aos/dist/aos.css';
import About from './components/About'
import Service from './components/Service'
import Signup from './Pages/Signup'
import Servicedetails from './components/Servicedetails'
import { useEffect } from "react";

function App() {
  useEffect(() => {
  AOS.init({
    duration: 1000, // 1 second
    // once: true      // only animate once on scroll
  });
}, []);
  return (
    <>
      {/* <VoiceTranslaterTabing /> */}
      <Header />
      <Home />
      <About/>
      <Service/>
      <Servicedetails />
      <Signup />
      <Footer />
      <ScrollToTop />
      <Preloader />
    </>
  );
}

export default App;
