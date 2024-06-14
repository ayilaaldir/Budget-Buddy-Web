import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'

import App from '@/App.tsx'
import '@/index.css'

const theme = extendTheme({
  components: {
    Button: {
      variants: {
        "primary": {
          bg: "black",
          color: "white",
          _hover: {
            bg: "gray.800"
          },
          rounded: "lg"
        }
      }
    }
  }
})

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
)