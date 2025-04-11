import React from 'react';
import Image from 'next/image';
import styles from '../css/Brand.module.css';

export default function LogoItem({ src, alt, width, height }) {
  return (
    <div className={styles.logoItem}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        objectFit="contain"
      />
    </div>
  );
}