import React from 'react';
import styles from '../css/Brand.module.css';

export default function SectionHeading({ text }) {
  return <p className={styles.heading}>{text}</p>;
}
