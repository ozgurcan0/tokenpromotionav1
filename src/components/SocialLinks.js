'use client';
import Image from 'next/image';

export default function SocialLinks() {
  const socialLinks = [
    {
      name: 'Telegram',
      icon: '/icons/telegram-icon.svg',
      url: 'https://t.me/tcoin',
      color: '#229ED9'
    },
    {
      name: 'Twitter',
      icon: '/icons/twitter-icon.svg',
      url: 'https://twitter.com/tcoin',
      color: '#1DA1F2'
    },
    {
      name: 'Discord',
      icon: '/icons/discord-icon.svg',
      url: 'https://discord.gg/tcoin',
      color: '#7289DA'
    }
  ];

  return (
    <footer className="social-section">
      <div className="container">
        <h2 className="section-title neon-text">Join Our Community</h2>
        <div className="social-icons">
          {socialLinks.map((social, index) => (
            <a 
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
              style={{'--hover-color': social.color}}
            >
              <div className="social-icon-wrapper">
                <Image
                  src={social.icon}
                  width={32}
                  height={32}
                  alt={social.name}
                  className="social-icon"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
