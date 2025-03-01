'use client';
import { useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { getWalletAdapters } from '../lib/walletAdapters';
import '@solana/wallet-adapter-react-ui/styles.css';

export default function WalletContextProvider({ children }) {
  const { wallets, endpoint } = useMemo(() => getWalletAdapters(), []);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}
