import React from 'react';
import Image from 'next/image';
import styles from '../css/Footer.module.css';

const SocialIconList = ({ icons }) => (
  <div className={styles.socialIcons}>
    {icons.map((icon, idx) => (
      <a key={idx} href={icon.href} target="_blank" rel="noopener noreferrer">
        <Image src={icon.src} alt={icon.name} width={22} height={22} />
      </a>
    ))}
  </div>
);

export default SocialIconList;
