'use client';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

export default function Vision() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const visionPoints = [
    {
      title: "Animal Welfare",
      description: "Using Solana's high-performance blockchain to create a transparent and efficient system for supporting animal welfare projects worldwide.",
      icon: "/icons/pets.svg"
    },
    {
      title: "Fast & Efficient",
      description: "Built on Solana for lightning-fast transactions and minimal fees, making it easier to contribute to animal welfare causes.",
      icon: "/icons/speed.svg"
    },
    {
      title: "Community Driven",
      description: "A strong community of animal lovers and Solana enthusiasts working together to make a real difference in animals' lives.",
      icon: "/icons/community.svg"
    }
  ];

  const features = [
    "Lightning Fast Transactions on Solana",
    "Ultra-Low Transaction Fees",
    "Transparent Donation Tracking",
    "Community Governance",
    "Automated Charity Distributions"
  ];

  return (
    <div className="vision-section">
      <div className="container">
        <h2 className="section-title gradient-text">Our Vision</h2>
        
        <div className={`vision-grid ${inView ? 'visible' : ''}`} ref={ref}>
          {visionPoints.map((point, index) => (
            <div key={index} className="vision-card glass-effect">
              <div className="vision-icon">
                <Image src={point.icon} width={48} height={48} alt={point.title} />
              </div>
              <h3>{point.title}</h3>
              <p>{point.description}</p>
            </div>
          ))}
        </div>

        <div className="vision-features">
          <h3 className="features-title">Why Walking Cat Token?</h3>
          <ul className="features-list">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
