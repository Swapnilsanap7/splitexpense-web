import CustomScrollbar from '@/app/components/CustomScrollbar';
import { Caveat } from 'next/font/google';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AuthProvider from './context/AuthContext';
import './globals.css';

const caveat = Caveat({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata = {
  title: 'SplitExpense',
  description: 'Effortlessly manage your shared expenses',
  
  icons: {
    icon: "/favicon.ico", // Default Favicon
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "manifest",
        url: "/site.webmanifest",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/favicon-16x16.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "512x512",
        url: "/android-chrome-512x512.png",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="pt-16 font-sans">
        <CustomScrollbar />
        <AuthProvider>
          <Navbar />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
