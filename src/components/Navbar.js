'use client';
import { useState, useEffect } from 'react';
import WalletConnect from './WalletConnect';
import Image from 'next/image';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);

      // Hangi bölümde olduğumuzu belirle
      const sections = ['home', 'vision', 'features', 'tokenomics', 'roadmap', 'buy', 'faq'];
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop;
      window.scrollTo({
        top: offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'vision', label: 'Vision' },
    { id: 'features', label: 'Features' },
    { id: 'tokenomics', label: 'Tokenomics' },
    { id: 'roadmap', label: 'Roadmap' },
    { id: 'buy', label: 'How to Buy' },
    { id: 'faq', label: 'FAQ' }
  ];

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <div className="logo-wrapper">
            <Image 
              src="/logo.png" 
              alt="WalkingCat Token" 
              width={40} 
              height={40}
              className="logo-image"
            />
            <span className="logo-text">
              <span className="gradient-text">WalkingCat</span>
              <span className="token-text">Token</span>
            </span>
          </div>

          <button 
            className="mobile-menu-button"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>

          <div className="menu desktop-menu">
            {menuItems.map(item => (
              <button
                key={item.id}
                className={`menu-item ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>

          <WalletConnect />
        </div>
      </nav>

      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        {menuItems.map(item => (
          <button
            key={item.id}
            className={`menu-item ${activeSection === item.id ? 'active' : ''}`}
            onClick={() => {
              scrollToSection(item.id);
              toggleMenu();
            }}
          >
            {item.label}
          </button>
        ))}
      </div>
    </>
  );
}
