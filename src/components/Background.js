'use client';

export default function Background() {
  return (
    <div className="background-effects">
      {/* Renkli circles */}
      <div className="circle circle-1"></div>
      <div className="circle circle-2"></div>
      <div className="circle circle-3"></div>
      <div className="circle circle-4"></div>
      
      {/* Yıldız katmanları */}
      <div className="stars-container">
        <div className="stars stars-1"></div>
        <div className="stars stars-2"></div>
        <div className="stars stars-3"></div>
      </div>
    </div>
  );
}
