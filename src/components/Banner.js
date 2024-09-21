// src/components/Banner.js

import Image from 'next/image';
import bannerImage from '../../public/images/banner-img.jpg'; // Adjust the path to your image
import styles from '../styles/banner.module.css'; // Use CSS Modules

export default function Banner() {
  return (
    <div className={styles.bannerContainer}>
      <Image
        src={bannerImage}
        alt="Banner Image"
        layout="fill"
        className={styles.bannerImage}
      />
      <div className={styles.overlay} />
    </div>
  );
}
