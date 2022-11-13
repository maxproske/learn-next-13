import localFont from '@next/font/local'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

const font = localFont({ src: '../public/font/gotham-bold-webfont.woff2' })

export default function App({ Component, pageProps }: AppProps) {
  return <div className={font.className}>
    <Component {...pageProps} />
  </div>
}
