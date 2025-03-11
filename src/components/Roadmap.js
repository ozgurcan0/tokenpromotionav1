'use client';
import { useInView } from 'react-intersection-observer';

export default function Roadmap() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <section className="roadmap-section" ref={ref}>
      <div className="container">
        <h2 className={`section-title neon-text ${inView ? 'visible' : ''}`}>Roadmap</h2>
        <div className={`roadmap-timeline ${inView ? 'visible' : ''}`}>
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content card">
              <h3 className="phase-title">Step 1 - Fund Raising and Preparation</h3>
              <p>The first step is to secure the financial resources of the project and make the necessary preparations. At this stage, strategies for raising funds from investors are determined and a detailed plan of the project is created.</p>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content card">
              <h3 className="phase-title">Step 2 - Pet Food Factory Setup</h3>
              <p>After the funds are collected, the first stage is the establishment of the pet food factory. This factory is designed and built to ensure the production of sustainable and high-quality pet food.</p>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content card">
              <h3 className="phase-title">Step 3 - Social Responsibility Projects</h3>
              <p>After the establishment of the factory, social responsibility projects are initiated as the second stage. These projects include studies aimed at improving the welfare of stray animals. For example, projects such as establishing facilities that will meet the shelter and health needs of stray animals are implemented at this stage.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content card">
              <h3 className="phase-title">Step 4 - Cooperation with Investors and Society</h3>
              <p>In the third stage, the impact of the project is increased by collaborating with investors and the society. We keep in regular contact with investors, get their feedback and work is done to further develop the project. At the same time, support is provided to the society by providing information about the benefits and impacts of the project.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content card">
              <h3 className="phase-title">Step 5 - Long-Term Sustainability and Growth</h3>
              <p>The final phase focuses on the long-term sustainability and growth goals of the project. At this stage, strategies are determined to increase the profitability of the project and expand its impact. Additionally, steps such as opening up to new markets and establishing collaborations are also taken at this stage.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
