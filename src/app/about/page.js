'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navbar from '../../components/Navbar';

export default function AboutPage() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <>
      <Navbar />
      <div className="page-wrapper">
        <section className="about-section" ref={ref}>
          <div className="container">
            <motion.div
              className="about-content"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h1 className="section-title neon-text">About Walking Cat Token</h1>
              <div className="about-grid">
                <div className="about-text">
                  <p className="lead-text">
                    Walking Cat Token (WKCT) is an innovative cryptocurrency developed using blockchain and artificial intelligence technologies to improve the quality of life of stray animals.
                  </p>
                  <div className="text-content">
                    <p>With the mission of protecting animal rights and improving animal welfare on a global scale, our organization aims to meet the nutrition, shelter and health needs of stray animals by establishing sustainable pet food factories and minimizing environmental impacts. We both protect the environment and support animals with our use of renewable energy and environmentally friendly practices.</p>
                    
                    <p>Walking Cat Token offers investors and animal lovers a transparent investment environment with the reliability provided by blockchain. We build trust by providing maximum transparency at every step. By investing in WKCT, our investors not only gain financial returns, but also contribute to social responsibility projects that directly improve the welfare of stray animals.</p>
                    
                    <p>The sustainable pet food factories we have developed offer innovative solutions to the pet food and products market, which is worth 137 billion dollars annually in the global market. These facilities use renewable energy and wind energy, taking into account environmental factors. Additionally, by offering diversified investment products suitable for investors of all budgets, investments made through blockchain technology and NFTs provide access to new assets such as farmland and renewable energy projects.</p>
                    
                    <p>Our project offers an innovative approach to the worldwide pet products and food market, providing investors with a competitive advantage in global markets. Your investment with Walking Cat Token directly contributes to improving the lives of stray animals. Take your place on this platform, which offers high efficiency, transparency and social impact together, and make a real difference!</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
