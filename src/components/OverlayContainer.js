import React from 'react';
import styles from '../styles/overlay-container.module.css'; // Importing the CSS module

const OverlayContainer = ({ title, description, children }) => {
  return (
    <div className={styles.overlayContainer}>
      <div className={styles.overlayContent}>
        {title && <h2 className={styles.overlayTitle}>{title}</h2>}
        {description && <p className={styles.overlayDescription}>{description}</p>}
        <div className={styles.overlayInfo}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default OverlayContainer;
