'use client';
import { motion } from 'framer-motion';
import CoinAnimation from './CoinAnimation';

export default function Vision() {
  return (
    <div className="container">
      <div className="vision-layout">
        <motion.div 
          className="vision-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <CoinAnimation />
          <div className="stats-badges">
            <div className="stat-badge glow-effect">
              <span className="stat-value">$1M+</span>
              <span className="stat-label">Market Cap</span>
            </div>
            <div className="stat-badge glow-effect">
              <span className="stat-value">5000+</span>
              <span className="stat-label">Holders</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="vision-right"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="gradient-text">Our Vision</h2>
          <p className="vision-text">
            Walking Cat Token aims to revolutionize animal welfare through blockchain technology.
            We're creating a decentralized ecosystem that directly supports animal shelters and welfare initiatives.
          </p>
          <div className="feature-list">
            <div className="feature-item">
              <div className="feature-icon">🔒</div>
              <div className="feature-content">
                <h3>Secure & Audited</h3>
                <p>Smart contract verified and audited for maximum security</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🌍</div>
              <div className="feature-content">
                <h3>Community Driven</h3>
                <p>Governance decisions made by token holders</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
