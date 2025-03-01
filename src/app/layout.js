import './globals.css';
import '@solana/wallet-adapter-react-ui/styles.css';
import { Space_Grotesk } from 'next/font/google';
import { WalletContextProvider } from '../lib/walletAdapters';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={spaceGrotesk.className}>
      <body>
        <WalletContextProvider>
          <main className="app-main">
            {children}
          </main>
        </WalletContextProvider>
      </body>
    </html>
  );
}
