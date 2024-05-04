import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: "Blog App Home Page",
    template: "%s | My Blog"
  },
  description: 'Next.js starter app',
  icons: {
    icon: "/logo.png"
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="cont">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}