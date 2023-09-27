import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { ChakraProvider } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import theme from '@/libs/theme'
import GoogleAnalytics from '@/components/GoogleAnalytics'

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <>
      <GoogleAnalytics />
      <ChakraProvider theme={theme}>
        <AnimatePresence mode='wait'>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </ChakraProvider>
    </>
  )
}