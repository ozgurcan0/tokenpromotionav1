'use client';
import { useState } from 'react';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is Walking Cat Token?",
      answer: "Walking Cat Token is a project developed using blockchain and artificial intelligence technologies to increase the welfare of stray animals and raise awareness to the society. This token is used as a tool for donations and social responsibility initiatives to help stray animals. The project offers various technological solutions to monitor the health status of stray animals, provide food and shelter, facilitate adoption processes and raise awareness of stray animals in society. Walking Cat Token is also supported by features such as NFT integration, encouraging user participation and ensuring the sustainability of the project. This token also offers investors the opportunity to invest in social responsibility by contributing to the project."
    },
    {
      question: "How does WKCT work?",
      answer: "The project uses blockchain and artificial intelligence technologies to monitor stray animals, keep health records and finance social responsibility projects."
    },
    {
      question: "What benefits do Walking Cat Token holders receive?",
      answer: "Walking Cat Token holders have the opportunity to make a socially responsible investment by taking a share from the success and growth of the project."
    },
    {
      question: "How to buy WKCT?",
      answer: "Walking Cat Token can be listed on select cryptocurrency exchanges or purchased directly from the project website."
    },
    {
      question: "What do you think about the future of Walking Cat Token?",
      answer: "The future of Walking Cat Token will be about the adoption of the project, its development and the growth of its ecosystem. Community support and usage are important factors that determine the future of the token. Walking Cat Token continues to grow in the future with the increasing interest of social responsibility-oriented projects and the widespread use of blockchain technology."
    },
    {
      question: "How can I support Walking Cat Token?",
      answer: "To support Walking Cat Token, you can promote the project, share it on social media, or support the project directly. You can also participate in the community management of the project and share your ideas."
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
