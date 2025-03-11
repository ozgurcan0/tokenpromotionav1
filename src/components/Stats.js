'use client';
import { useInView } from 'react-intersection-observer';

export default function Stats() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const stats = [
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C11.4477 22 11 21.5523 11 21V3C11 2.44772 11.4477 2 12 2C12.5523 2 13 2.44772 13 3V21C13 21.5523 12.5523 22 12 22Z" fill="currentColor"/>
          <path d="M19 12H5C4.44772 12 4 11.5523 4 11C4 10.4477 4.44772 10 5 10H19C19.5523 10 20 10.4477 20 11C20 11.5523 19.5523 12 19 12Z" fill="currentColor"/>
          <path d="M12 22C8.13401 22 5 18.866 5 15V9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      value: '10,000,000,000',
      label: 'Total Supply'
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 21V19C16 16.7909 14.2091 15 12 15H6C3.79086 15 2 16.7909 2 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" fill="currentColor" stroke="currentColor" strokeWidth="2"/>
          <path d="M22 21V19C21.9986 17.1771 20.765 15.5857 19 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M19 11C21.2091 11 23 9.20914 23 7C23 4.79086 21.2091 3 19 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      value: '10K+',
      label: 'Holders'
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 8.5H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M6 16.5H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <rect x="2" y="4.5" width="20" height="15" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z" fill="currentColor" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      value: '$0.04',
      label: 'Initial Price'
    }
  ];

  return (
    <div className="stats-grid" ref={ref}>
      {stats.map((stat, index) => (
        <div key={index} className={`stat-card glass-effect ${inView ? 'visible' : ''}`}>
          <div className="stat-icon-wrapper">
            <div className="stat-icon-bg"></div>
            <div className="stat-icon">
              {stat.icon}
            </div>
          </div>
          <div className="stat-content">
            <h3>{stat.label}</h3>
            <div className="stat-value">{stat.value}</div>
          </div>
          <div className="stat-decoration"></div>
        </div>
      ))}
    </div>
  );
}
