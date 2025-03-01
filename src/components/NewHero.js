'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import { useInView } from 'react-intersection-observer';

export default function NewHero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section className="hero-section" ref={ref}>
      <div className="hero-background">
        <Canvas className="hero-canvas">
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 5, 2]} />
          <Sphere args={[1, 64, 64]}>
            <meshStandardMaterial 
              color="#22d3ee"
              wireframe={true}
              opacity={0.1}
              transparent
            />
          </Sphere>
        </Canvas>
      </div>

      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-badge">
          <span className="badge-icon">✨</span>
          <span className="badge-text">Revolutionary DeFi on Solana</span>
        </div>

        <motion.h1 
          className="hero-title"
          style={{ y }}
        >
          Walking Cat Token
          <span className="hero-subtitle">First Animal Welfare Token on Solana</span>
        </motion.h1>

        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-value">$1M+</span>
            <span className="stat-label">Total Volume</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">5K+</span>
            <span className="stat-label">Holders</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">$100K+</span>
            <span className="stat-label">Donated</span>
          </div>
        </div>

        <div className="hero-cta">
          <button className="button primary">
            Buy Now
            <span className="button-glow"></span>
          </button>
          <button className="button secondary">
            View Chart
          </button>
        </div>
      </motion.div>
    </section>
  );
}
