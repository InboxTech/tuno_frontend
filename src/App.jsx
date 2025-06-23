import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home";
import Header from "./components/Header";
import "./assets/css/style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/css/fontawesome.min.css";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop ";
import Preloader from "./components/Preloader";

function App() {
  return (
    <>
      {/* <VoiceTranslaterTabing /> */}
      <Header />
      <Home />
      <Footer />
      <ScrollToTop />
      <Preloader />
    </>
  );
}

export default App;
