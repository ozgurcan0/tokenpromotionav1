'use client';
import { useInView } from 'react-intersection-observer';

export default function Documents() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <section className="documents-section" ref={ref}>
      <div className="container">
        <h2 className={`section-title neon-text ${inView ? 'visible' : ''}`}>Documents</h2>
        <div className={`documents-grid ${inView ? 'visible' : ''}`}>
          <a href="#" className="document-card card">
            <svg className="pdf-icon" viewBox="0 0 24 24" width="48" height="48">
              <path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9.5 8.5h-3v-1h3v1zm3 0h-2v-1h2v1zm5 0h-4v-1h4v1z"/>
            </svg>
            <h3>Terms & Conditions</h3>
          </a>
          
          <a href="#" className="document-card card">
            <svg className="pdf-icon" viewBox="0 0 24 24" width="48" height="48">
              <path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9.5 8.5h-3v-1h3v1zm3 0h-2v-1h2v1zm5 0h-4v-1h4v1z"/>
            </svg>
            <h3>White Papers</h3>
          </a>
          
          <a href="#" className="document-card card">
            <svg className="pdf-icon" viewBox="0 0 24 24" width="48" height="48">
              <path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9.5 8.5h-3v-1h3v1zm3 0h-2v-1h2v1zm5 0 h-4v-1h4v1z"/>
            </svg>
            <h3>Privacy Policy</h3>
          </a>

          <a href="#" className="document-card card">
            <svg className="pdf-icon" viewBox="0 0 24 24" width="48" height="48">
              <path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9.5 8.5h-3v-1h3v1zm3 0h-2v-1h2v1zm5 0h-4v-1h4v1z"/>
            </svg>
            <h3>Documentation</h3>
          </a>
        </div>
      </div>
    </section>
  );
}
