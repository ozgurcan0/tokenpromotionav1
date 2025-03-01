import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3>Quick Links</h3>
            <Link href="/whitepaper">Whitepaper</Link>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
          <div className="footer-section">
            <h3>Resources</h3>
            <a href="/audit.pdf">Audit Report</a>
            <a href="/pitch-deck.pdf">Pitch Deck</a>
            <Link href="/faq">FAQ</Link>
          </div>
          <div className="footer-section">
            <h3>Community</h3>
            {/* Social links... */}
          </div>
        </div>
      </div>
    </footer>
  );
}
