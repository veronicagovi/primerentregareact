import React from '/primerentregareact/assets/react'
import ReactDOM from 'react-dom/client'
import App from '/primerentregareact/App.jsx'
import '/primerentregareact/index.css'
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
    <App />
    </ChakraProvider>
  </React.StrictMode>,
)
