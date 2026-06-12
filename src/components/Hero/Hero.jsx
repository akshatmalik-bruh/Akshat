import React from 'react';
import styles from './Hero.module.css';

export default function Hero({ onTitleClick }) {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div 
          className={styles.nameWrapper} 
          onClick={onTitleClick}
          style={{ cursor: 'pointer' }}
          title="Click to switch theme (Light/Dark)"
        >
          {/* Tagline text above the name */}
          <p className={styles.tagline}>
            A FULL STACK AI ENGINEER BASED IN INDIA
          </p>

          {/* Akshat with black outline & transparent middle */}
          <h1 className={`${styles.firstName} ${styles.gtaFont}`}>
            AKSHAT
          </h1>
          
          {/* Malik overlapping on Y axis */}
          <h1 className={`${styles.lastName} ${styles.gtaFont}`}>
            MALIK
          </h1>
        </div>
      </div>
    </section>
  );
}
