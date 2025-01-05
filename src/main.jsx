import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// In your main App or index file, you need to import the Slick CSS.
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
