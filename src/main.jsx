import React from '/primerentregareact/assets/react'
import ReactDOM from '/primerentregareact/react-dom/client'
import App from '/primerentregareact/src/App.jsx'
import '/primerentregareact/src/index.css'
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
    <App />
    </ChakraProvider>
  </React.StrictMode>,
)
