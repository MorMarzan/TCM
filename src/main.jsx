import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './RootCmp.jsx'
import './i18n/i18n.js'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleReCaptchaProvider
    reCaptchaKey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
  >
    <App />
  </GoogleReCaptchaProvider>
)
