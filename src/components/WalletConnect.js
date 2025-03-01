'use client';
import dynamic from 'next/dynamic';

// WalletMultiButton'ı client-side only olarak import et
const WalletMultiButtonDynamic = dynamic(
  async () => (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
  { ssr: false }
);

export default function WalletConnect() {
  return (
    <div className="wallet-container">
      <WalletMultiButtonDynamic className="wallet-button" />
    </div>
  );
}
