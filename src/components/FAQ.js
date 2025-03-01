'use client';
import { useState } from 'react';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is Walking Cat Token (WKCT)?",
      answer: "WKCT is a Solana-based token designed to revolutionize animal welfare funding through blockchain technology. It combines fast transactions, low fees, and transparent donation tracking."
    },
    {
      question: "How do I buy WKCT?",
      answer: "You can buy WKCT on Raydium DEX using Phantom or Solflare wallet. Simply connect your wallet, swap SOL for WKCT using our token address."
    },
    {
      question: "Is WKCT audited?",
      answer: "Yes, WKCT smart contract is audited by leading Solana security firms ensuring maximum safety and reliability."
    },
    {
      question: "How does WKCT help animals?",
      answer: "A portion of each transaction is automatically directed to verified animal welfare organizations, with transparent tracking on the Solana blockchain."
    }
  ];

  return (
    <section className="faq-section">
      <div className="container">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <span className="icon" role="button" aria-label="Toggle answer">
                  {activeIndex === index ? '×' : '+'}
                </span>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
