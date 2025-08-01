import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import SmoothScrollProvider from "./components/SmoothScrollProvider";
import {AuthProvider} from "./store/auth.jsx"


createRoot(document.getElementById('root')).render(
   <StrictMode>
    <SmoothScrollProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </SmoothScrollProvider>
  </StrictMode>
)
