import React from 'react';
import styles from '../css/Footer.module.css';

const FooterLinkSection = ({ title, links = [] }) => (
  <div>
    <p className={styles.heading}>{title}</p>
    <ul className={styles.linkList}>
      {links.map((item, idx) => (
        <li key={idx}>
          <a href={item.href} className={styles.link}>{item.label}</a>
        </li>
      ))}
    </ul>
  </div>
);

export default FooterLinkSection;
