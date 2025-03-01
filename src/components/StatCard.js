'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function StatCard({ label, value, icon, startValue = 0 }) {
  const counterRef = useRef(null);
  const targetValue = parseInt(value.replace(/\D/g, ''));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateValue(startValue, targetValue, 2000);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [targetValue, startValue]);

  const animateValue = (start, end, duration) => {
    let startTimestamp = null;
    const element = counterRef.current;
    
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentValue = Math.floor(progress * (end - start) + start);
      
      if (element) {
        element.textContent = value.replace(/\d+/, currentValue.toLocaleString());
      }

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  };

  return (
    <div className="stat-card glass-effect">
      <div className="stat-icon-wrapper">
        <div className="stat-icon-bg"></div>
        <Image 
          src={icon} 
          width={40} 
          height={40} 
          alt={label} 
          className="stat-icon"
        />
      </div>
      <div className="stat-content">
        <h3>{label}</h3>
        <p className="stat-value" ref={counterRef}>{value}</p>
      </div>
      <div className="stat-decoration"></div>
    </div>
  );
}
