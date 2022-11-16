import localFont from '@next/font/local'
import '../styles/globals.css'

const font = localFont({ src: '../public/font/gotham-bold-webfont.woff2' })

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en">
        <body>
        <div className={font.className}>
            {children}
            </div>
            </body>
      </html>
    );
  }