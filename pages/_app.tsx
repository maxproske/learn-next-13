import { Oswald } from '@next/font/google'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

const oswald = Oswald()

export default function App({ Component, pageProps }: AppProps) {
  return <div className={oswald.className}>
    <Component {...pageProps} />
  </div>
}
