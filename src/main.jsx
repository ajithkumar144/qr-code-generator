import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QrCodeGenerator } from './qrCodeGenerator'


createRoot(document.getElementById('root')).render(
  <StrictMode>

     <QrCodeGenerator/>
     
  </StrictMode>

  

)
