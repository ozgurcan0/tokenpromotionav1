'use client';
import { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

export default function TokenMetrics() {
  const chartRef = useRef(null);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView && chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ['Public Sale', 'Team', 'Marketing', 'Development'],
          datasets: [{
            data: [50, 20, 15, 15],
            backgroundColor: [
              'rgba(0, 245, 255, 0.8)',
              'rgba(112, 0, 255, 0.8)',
              'rgba(255, 0, 255, 0.8)',
              'rgba(0, 255, 155, 0.8)'
            ]
          }]
        },
        options: {
          responsive: true,
          animation: {
            animateScale: true,
            animateRotate: true
          }
        }
      });
    }
  }, [inView]);

  return (
    <div className="metrics-container" ref={ref}>
      <div className="metrics-grid">
        <div className="metric-card">
          <h3>Total Supply</h3>
          {inView && <CountUp end={100000000} duration={2.5} separator="," />}
        </div>
        <div className="metric-card">
          <h3>Holders</h3>
          {inView && <CountUp end={1000} duration={2} />}+
        </div>
        <canvas ref={chartRef} className="distribution-chart" />
      </div>
    </div>
  );
}
