import Footer from '../components/others/Footer'
import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from './redux/provider';
import store from '../app/redux/store/store';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Epeedika',
  description: 'Created by dilshad for team Herald',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body 
      className={inter.className}>
           <Providers >

        {children}
           </Providers>
        
      {/* <Footer/> */}
      </body>
    </html>
  )
}
