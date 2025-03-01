'use client';
import Image from 'next/image';

export default function BuySection() {
  return (
    <section className="buy-section">
      <div className="container">
        <h2 className="section-title neon-text">How to Buy</h2>
        <div className="steps-container">
          <div className="step-card">
            <div className="step-number">1</div>
            <h3>Create Wallet</h3>
            <p>Download Phantom or Solflare</p>
          </div>
          <div className="step-card">
            <div className="step-number">2</div>
            <h3>Get SOL</h3>
            <p>Buy SOL from any exchange</p>
          </div>
          <div className="step-card">
            <div className="step-number">3</div>
            <h3>Connect Wallet</h3>
            <p>Connect to Raydium DEX</p>
          </div>
          <div className="step-card">
            <div className="step-number">4</div>
            <h3>Swap for WKCT</h3>
            <p>Use our token address to swap</p>
          </div>
        </div>
        <div className="buy-actions">
          <button className="button primary">Buy on Raydium</button>
          <button className="button secondary">View on Solscan</button>
        </div>
      </div>
    </section>
  );
}
