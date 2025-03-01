'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Whitepaper() {
  const [activeSection, setActiveSection] = useState('intro');

  const sections = [
    { 
      id: 'intro', 
      title: 'Introduction',
      content: 'Walking Cat Token is revolutionizing animal welfare...',
      image: '/images/whitepaper/intro.png'
    },
    { 
      id: 'tech', 
      title: 'Technology',
      content: 'Built on Solana for maximum efficiency...',
      image: '/images/whitepaper/tech.png'
    },
    { id: 'tokenomics', title: 'Tokenomics' },
    { id: 'roadmap', title: 'Roadmap' }
  ];

  return (
    <div className="whitepaper-page">
      <div className="whitepaper-hero">
        <Image
          src="/images/whitepaper-hero.jpg"
          alt="Whitepaper Hero"
          fill
          className="object-cover"
        />
        <div className="hero-overlay"></div>
        <h1>Walking Cat Token Whitepaper</h1>
      </div>

      <div className="whitepaper-content">
        <nav className="sidebar glass-effect">
          {sections.map(section => (
            <button 
              key={section.id}
              className={`nav-item ${activeSection === section.id ? 'active' : ''}`}
              onClick={() => setActiveSection(section.id)}
            >
              {section.title}
            </button>
          ))}
        </nav>

        <motion.div 
          className="content-area"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {sections.map(section => (
            section.id === activeSection && (
              <div key={section.id} className="section-content">
                <h2>{section.title}</h2>
                <Image
                  src={section.image}
                  alt={section.title}
                  width={600}
                  height={300}
                  className="section-image"
                />
                <p>{section.content}</p>
              </div>
            )
          ))}
        </motion.div>
      </div>
    </div>
  );
}
