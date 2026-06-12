import React, { useEffect, useState } from 'react';
import styles from './LoadingScreen.module.css';

export default function LoadingScreen() {
  const [isMounted, setIsMounted] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Trigger the logo fade-in after 400ms (gives time for layers to cascade)
    const textTimeout = setTimeout(() => {
      setShowText(true);
    }, 400);

    // Start sliding up after 1.4 seconds
    const exitTimeout = setTimeout(() => {
      setIsExiting(true);
    }, 1400);

    // Unmount after 2.5 seconds (gives enough time for all layers to slide up)
    const unmountTimeout = setTimeout(() => {
      setIsMounted(false);
    }, 2500);

    return () => {
      clearTimeout(textTimeout);
      clearTimeout(exitTimeout);
      clearTimeout(unmountTimeout);
    };
  }, []);

  if (!isMounted) return null;

  return (
    <div className={`${styles.loaderContainer} ${isExiting ? styles.exiting : ''}`}>
      {/* Wave Layer 1 (Charcoal grey stream) */}
      <div className={`${styles.layer} ${styles.layer1}`}>
        <div className={styles.fill} style={{ backgroundColor: '#222222' }}></div>
        <svg className={styles.waveSvg} viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path 
            fill="#222222" 
            d="M0,192 C240,128 480,256 720,192 C960,128 1200,96 1440,160 L1440,0 L0,0 Z"
          ></path>
        </svg>
      </div>

      {/* Wave Layer 2 (Dark charcoal stream) */}
      <div className={`${styles.layer} ${styles.layer2}`}>
        <div className={styles.fill} style={{ backgroundColor: '#141414' }}></div>
        <svg className={styles.waveSvg} viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path 
            fill="#141414" 
            d="M0,128 C280,224 560,96 840,192 C1120,288 1280,128 1440,160 L1440,0 L0,0 Z"
          ></path>
        </svg>
      </div>

      {/* Wave Layer 3 (Deep solid black stream) */}
      <div className={`${styles.layer} ${styles.layer3}`}>
        <div className={styles.fill} style={{ backgroundColor: '#0a0a0a' }}></div>
        <svg className={styles.waveSvg} viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path 
            fill="#0a0a0a" 
            d="M0,96 C320,192 640,32 960,160 C1280,288 1360,96 1440,128 L1440,0 L0,0 Z"
          ></path>
        </svg>
      </div>

      {/* Minimal Notion-style logo in center of stream */}
      <div className={`${styles.logoContainer} ${showText ? styles.visible : ''}`}>
        <span className={styles.logoText}>AKSHAT MALIK</span>
        <div className={styles.progressLine}></div>
      </div>
    </div>
  );
}
