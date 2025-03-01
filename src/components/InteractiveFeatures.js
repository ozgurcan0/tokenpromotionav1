'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const features = [
  {
    icon: '🔒',
    title: 'Secure & Audited',
    description: 'Smart contract audited by leading security firms'
  },
  {
    icon: '🌍',
    title: 'Community Driven',
    description: 'Governance decisions made by token holders'
  },
  {
    icon: '🐱',
    title: 'Animal Welfare',
    description: 'Supporting global animal welfare initiatives'
  }
];

export default function InteractiveFeatures() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section className="features-section" ref={ref}>
      <div className="container">
        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
