import React from 'react';
import styles from './Socials.module.css';

const socialLinks = [
  { name: 'GITHUB', url: 'https://github.com/akshatmalik-bruh' },
  { name: 'LINKEDIN', url: 'https://www.linkedin.com/in/akshat-malik-2079973a0/' },
  { name: 'MEDIUM', url: 'https://medium.com/@akshatf8lmalik' },
  { name: 'GMAIL', url: 'mailto:akshatf8lmalik@gmail.com' }
];

export default function Socials() {
  return (
    <div className={styles.socials}>
      <ul className={styles.linkList}>
        {socialLinks.map((link) => (
          <li key={link.name} className={styles.linkItem}>
            <a 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.link}
            >
              <span className={styles.arrow}>→</span>
              <span className={styles.text}>{link.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
