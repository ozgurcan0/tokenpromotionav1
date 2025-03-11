import './globals.css';
import '@solana/wallet-adapter-react-ui/styles.css';
import { Space_Grotesk } from 'next/font/google';
import { WalletContextProvider } from '../lib/walletAdapters';
import Background from '../components/Background'; // Add this import

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata = {
  title: {
    default: 'Walking Cat Token | WKCT',
    template: '%s | Walking Cat Token'
  },
  description: 'A Better World for Our Paw Friends.',
  keywords: ['solana', 'crypto', 'token', 'animal welfare', 'blockchain', 'cryptocurrency'],
  openGraph: {
    title: 'Walking Cat Token',
    description: 'Walking Cat Token aims to provide high efficiency, high profit and transparency to investors by combining blockchain technology and paw love.',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Walking Cat Token',
    description: 'Revolutionary Solana Token for Animal Welfare',
    images: ['/twitter-image.jpg'],
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={spaceGrotesk.className}>
      <body>
        <WalletContextProvider>
          <Background />
          <main className="app-main">
            {children}
          </main>
        </WalletContextProvider>
      </body>
    </html>
  );
}
