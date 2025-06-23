import react,{useEffect}  from 'react'
import './assets/css/style.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
// import './App.css'
import About from './components/About'

function App() {
useEffect(() => {
  AOS.init({
    duration: 1000, // 1 second
    // once: true      // only animate once on scroll
  });
}, []);

  return (
    <>
   <About/>
</>
  )
}

export default App
