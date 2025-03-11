'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import ParticleBackground from './ParticleBackground';
import StatCard from './StatCard';

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    // Basit bir animasyon için CSS transitions kullanıyoruz
    const elements = [
      { selector: '.hero-title', delay: 0 },
      { selector: '.hero-subtitle', delay: 200 },
      { selector: '.stat-card', delay: 400 },
      { selector: '.cta-button', delay: 600 }
    ];

    elements.forEach(({ selector, delay }) => {
      setTimeout(() => {
        document.querySelectorAll(selector).forEach(el => {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        });
      }, delay);
    });

    // Parallax efekti
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX - window.innerWidth / 2) * 0.005;
      const y = (clientY - window.innerHeight / 2) * 0.005;
      
      const parallaxElements = document.querySelectorAll('.parallax-layer');
      parallaxElements.forEach(el => {
        el.style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const stats = [
    { label: 'Total Supply', value: '100M', icon: '/icons/supply.svg' },
    { label: 'Initial Price', value: '$0.001', icon: '/icons/price.svg' },
    { label: 'Holders', value: '1000+', icon: '/icons/holders.svg' }
  ];

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-background">
        <div className="gradient-sphere gradient-sphere-1"></div>
        <div className="gradient-sphere gradient-sphere-2"></div>
        <ParticleBackground />
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-logo-container">
            <Image 
              src="/logo.png"
              width={150}
              height={150}
              alt="WalkingCat Token"
              className="hero-logo-image glow-effect"
              priority
            />
          </div>
          
          <h1 className="hero-title gradient-text">
            Walking Cat Token
            <span className="hero-subtitle">A Better World for Our Paw Friends.</span>
          </h1>

          <p className="hero-description">
          Walking Cat Token aims to provide high efficiency, high profit and transparency to investors by combining blockchain technology and paw love.
          </p>

          <div className="hero-buttons">
            <button className="cta-button primary pulse-effect">
              Buy on Raydium
              <Image src="/icons/arrow-right.svg" width={20} height={20} alt="" />
            </button>
            <button className="cta-button secondary glow-effect">
              View on Solscan
              <Image src="/icons/chart.svg" width={20} height={20} alt="" />
            </button>
          </div>

          <div className="stats-grid">
            {stats.map((stat, index) => (
              <StatCard 
                key={index}
                label={stat.label}
                value={stat.value}
                icon={stat.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
