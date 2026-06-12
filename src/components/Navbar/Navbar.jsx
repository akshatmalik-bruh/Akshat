import React from 'react';
import styles from './Navbar.module.css';

export default function Navbar({ activeItem, navItems, onItemClick, onBack }) {
  return (
    <nav className={styles.navbar}>
      {activeItem && (
        <button className={styles.backButton} onClick={onBack} title="Go Back">
          ←
        </button>
      )}
      <ul className={styles.navList}>
        {navItems.map((item) => {
          const isActive = activeItem === item;
          return (
            <li key={item} className={styles.navItem}>
              <a
                href={`#${item.toLowerCase()}`}
                className={`${isActive ? styles.activeLink : styles.navLink}`}
                onClick={(e) => {
                  e.preventDefault();
                  onItemClick(item);
                }}
              >
                {!isActive && <span className={styles.dot}></span>}
                <span className={styles.text}>{item}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
