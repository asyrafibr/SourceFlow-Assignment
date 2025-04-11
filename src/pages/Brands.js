import React from 'react';
import LogoItem from './components/reuseComponent/LogoItem.js';
import SectionHeading from './components/reuseComponent/SectionHeading.js';
import SectionWrapper from './components/reuseComponent/SectionWrapper.js';
import styles from './components/css/Brand.module.css';
import brandData from './components/data/brand.json'
export default function Brands() {
  return (
    <SectionWrapper>
      <SectionHeading text="Who we work with" />
      <div className={styles.logoContainer}>
        {brandData.map((brand, idx) => (
          <LogoItem
            key={idx}
            src={brand.src}
            alt={brand.name}
            width={brand.width}
            height={brand.height}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
