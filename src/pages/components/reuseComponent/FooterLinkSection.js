import React from 'react';
import styles from '../css/Footer.module.css';

const FooterLinkSection = ({ title, links }) => (
  <div>
    <h5 className={styles.heading}>{title}</h5>
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
