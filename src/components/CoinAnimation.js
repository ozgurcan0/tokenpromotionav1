'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function CoinAnimation() {
  return (
    <div className="coin-container">
      <motion.div
        className="floating-coin"
        animate={{
          y: [0, -20, 0],
          rotateY: [0, 360]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="coin-face front">
          <Image
            src="/logo.png" // Logo.png kullanıyoruz
            alt="WKCT Logo"
            width={200}
            height={200}
            className="coin-logo"
            priority
          />
          <div className="coin-circle"></div>
          <div className="coin-symbol">WKCT</div>
        </div>
        <div className="coin-glow"></div>
      </motion.div>
    </div>
  );
}
