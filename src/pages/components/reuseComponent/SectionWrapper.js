import React from 'react';
import styles from '../css/Brand.module.css';

export default function SectionWrapper({ children }) {
  return <section className={styles.wrapper}>{children}</section>;
}
