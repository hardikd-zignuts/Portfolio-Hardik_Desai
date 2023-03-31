import Navbar from '@/src/components/navbar'
import '@/styles/main.scss'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}
