'use client';
import { useInView } from 'react-intersection-observer';

export default function Roadmap() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <section className="roadmap-section" ref={ref}>
      <div className="container">
        <h2 className={`section-title neon-text ${inView ? 'visible' : ''}`}>Roadmap</h2>
        <div className={`roadmap-timeline ${inView ? 'visible' : ''}`}>
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content card">
              <h3 className="phase-title">Phase 1 - Q1 2024</h3>
              <ul className="phase-list">
                <li>Token Launch & Presale</li>
                <li>CoinGecko & CMC Listing</li>
                <li>Community Building</li>
                <li>Initial CEX Listings</li>
                <li>Marketing Campaign</li>
              </ul>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content card">
              <h3 className="phase-title">Phase 2 - Q2 2024</h3>
              <ul className="phase-list">
                <li>DEX Integration</li>
                <li>Staking Platform Launch</li>
                <li>NFT Collection Release</li>
                <li>Major CEX Listings</li>
                <li>Partnership Announcements</li>
              </ul>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content card">
              <h3 className="phase-title">Phase 3 - Q3 2024</h3>
              <ul className="phase-list">
                <li>Mobile App Development</li>
                <li>Governance DAO Launch</li>
                <li>Cross-chain Integration</li>
                <li>Major Partnerships</li>
                <li>Global Marketing Expansion</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
