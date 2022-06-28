import '../styles/global/globals.css'
import type { AppProps } from 'next/app'
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from '../components/navbar/navbar'



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <div className = 'app'>
      <Navbar>

      </Navbar>
      </div>
      <Component {...pageProps}/> 
    </ChakraProvider>
  )
}


export default MyApp
