'use client';
import { useInView } from 'react-intersection-observer';

export default function Tokenomics() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const tokenDistribution = [
    { label: 'Company Reserve', value: 30 },
    { label: 'Paw Love Initiative', value: 24 },
    { label: 'R&D', value: 10 },
    { label: 'Sales Marketing', value: 10 },
    { label: 'Team (Locked for 2 Years)', value: 10 },
    { label: 'Allocation of New Projects', value: 10 },
    { label: 'Awards', value: 5 },
    { label: 'Consultants', value: 1 }
  ];

  const tokenDetails = {
    name: 'Walking Cat Token',
    type: 'Multi-Chain & Swap (MCCS)',
    symbol: 'WKCT',
    platform: 'Solana (SOL)',
    circulationSupply: '1,000,000,000 WKCT',
    maxSupply: '10,000,000,000 WKCT'
  };

  return (
    <section className="tokenomics-section" ref={ref}>
      <div className="container">
        <h2 className={`section-title neon-text ${inView ? 'visible' : ''}`}>Token Distribution</h2>
        
        <div className={`tokenomics-content ${inView ? 'visible' : ''}`}>
          <div className="overview-section">
            <h3 className="overview-title gradient-text">Walking Cat Token (WKCT)</h3>
            <div className="overview-content">
              <p>
                Walking Cat Token develops sustainable projects to meet the nutrition, shelter and health needs of stray animals. 
                Therefore, investors not only receive financial returns, but also feel that they are providing a social benefit.
              </p>
              <p>
                Coolie loach African lungfish Redfin perch flying characin alooh armorhead pelagic cod moonfish candiru Oriental loach spikefish tang boafish peacock flounder
              </p>
            </div>
          </div>

          {/* Token Distribution Section */}
          <div className="distribution-section">
            <h3>Token Distribution</h3>
            <div className="distribution-chart card">
              {tokenDistribution.map((item, index) => (
                <div key={index} className="distribution-item">
                  <div className="distribution-header">
                    <span className="distribution-label">{item.label}</span>
                    <span className="distribution-value">{item.value}%</span>
                  </div>
                  <div className="distribution-bar-wrapper">
                    <div className="distribution-bar" style={{ width: `${item.value}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Token Details Section */}
          <div className="token-details-wrapper">
            <div className="token-details card">
              <h3>Token Details</h3>
              <div className="details-grid">
                {Object.entries(tokenDetails).map(([key, value], index) => (
                  <div key={index} className="detail-item">
                    <span className="detail-label">{key}</span>
                    <span className="detail-value">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* General Description */}
          <div className="token-features card">
            <h3 className="features-title">General Description</h3>
            <div className="features-content">
              <div className="description-section">
                <p className="main-description">
                  Walking Cat Token (WKCT) introduces cutting-edge technology offering seamless multi-chain support. 
                  With WKCT's bridging technology, users can effortlessly transition between the best blockchain networks.
                </p>
                
                <div className="tech-description">
                  <h4 className="tech-title">Supported Networks</h4>
                  <p>
                    Walking Cat Token is built on a multi-chain system that supports popular blockchain networks including:
                  </p>
                  <div className="networks-grid">
                    <span>Arbitrum</span>
                    <span>Ethereum</span>
                    <span>BNB Chain</span>
                    <span>Polygon</span>
                    <span>Solana</span>
                    <span>Tron</span>
                    <span>Tether</span>
                  </div>
                </div>

                <div className="goals-section">
                  <h4 className="goals-title">Our Goals with Walking Cat Token</h4>
                  <div className="goals-list">
                    <div className="goal-item">
                      <span className="goal-marker">01</span>
                      <p>Uniting the crypto community to lead innovation in technology</p>
                    </div>
                    <div className="goal-item">
                      <span className="goal-marker">02</span>
                      <p>Simplifying investments through multi-chain integration</p>
                    </div>
                    <div className="goal-item">
                      <span className="goal-marker">03</span>
                      <p>Shining our name on every DEX, CEX, and crypto platform</p>
                    </div>
                  </div>
                </div>

                <div className="closing-section">
                  <p>
                    WKCT supports the five most active blockchain networks beyond Bitcoin, 
                    delivering a fast, secure, and nearly gas-free experience for chain-to-chain 
                    transactions with just a few clicks.
                  </p>
                  <p className="closing-text">
                    Join us as we redefine crypto possibilities with Walking Cat Token!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
