'use client';
import { useInView } from 'react-intersection-observer';

export default function Tokenomics() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <section className="tokenomics-section" ref={ref}>
      <div className="container">
        <h2 className={`section-title neon-text ${inView ? 'visible' : ''}`}>Tokenomics</h2>
        <div className={`tokenomics-grid ${inView ? 'visible' : ''}`}>
          <div className="tokenomics-card">
            <div className="card-header">
              <h3>Token Distribution</h3>
            </div>
            <div className="distribution-list">
              <div className="distribution-item">
                <span className="label">Public Sale</span>
                <div className="bar-wrapper">
                  <div className="bar" style={{width: '40%'}}></div>
                  <span className="value">40%</span>
                </div>
              </div>
              <div className="distribution-item">
                <span className="label">Team</span>
                <div className="bar-wrapper">
                  <div className="bar" style={{width: '20%'}}></div>
                  <span className="value">20%</span>
                </div>
              </div>
              <div className="distribution-item">
                <span className="label">Development</span>
                <div className="bar-wrapper">
                  <div className="bar" style={{width: '25%'}}></div>
                  <span className="value">25%</span>
                </div>
              </div>
              <div className="distribution-item">
                <span className="label">Marketing</span>
                <div className="bar-wrapper">
                  <div className="bar" style={{width: '15%'}}></div>
                  <span className="value">15%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="tokenomics-card">
            <div className="card-header">
              <h3>Token Details</h3>
            </div>
            <div className="token-details">
              <div className="detail-item">
                <span className="label">Token Name</span>
                <span className="value neon-text">TCOIN</span>
              </div>
              <div className="detail-item">
                <span className="label">Total Supply</span>
                <span className="value">1,000,000,000</span>
              </div>
              <div className="detail-item">
                <span className="label">Initial Price</span>
                <span className="value">$0.01</span>
              </div>
              <div className="detail-item">
                <span className="label">Network</span>
                <span className="value">Ethereum</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
