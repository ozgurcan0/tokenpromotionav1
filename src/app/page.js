import Hero from '../components/Hero'
import Vision from '../components/Vision'
import Features from '../components/Features'
import Tokenomics from '../components/Tokenomics'
import Roadmap from '../components/Roadmap'
import FAQ from '../components/FAQ'
import BuySection from '../components/BuySection'
import SocialLinks from '../components/SocialLinks'
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="page-wrapper">
        <Hero />
        <section id="vision"><Vision /></section>
        <section id="features"><Features /></section>
        <section id="tokenomics"><Tokenomics /></section>
        <section id="roadmap"><Roadmap /></section>
        <section id="buy"><BuySection /></section>
        <section id="faq"><FAQ /></section>
        <SocialLinks />
      </div>
    </>
  )
}
