import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import jQuery from 'jquery'
window.$ = jQuery
window.jQuery = jQuery

// CSS imports from npm packages
import 'bootstrap/dist/css/bootstrap.min.css'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'

// JS packages
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// App
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
