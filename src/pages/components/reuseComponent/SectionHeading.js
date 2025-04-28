import React from 'react';
import styles from '../css/Brand.module.css';

export default function SectionHeading({ text }) {
  return <p  style={{color:'#D2D2D2', fontWeight:700,fontSize:"16px"}} className={styles.heading}>{text}</p>;
}
