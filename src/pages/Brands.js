import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import LogoItem from './components/reuseComponent/LogoItem.js';
import SectionHeading from './components/reuseComponent/SectionHeading.js';
import SectionWrapper from './components/reuseComponent/SectionWrapper.js';
import styles from './components/css/Brand.module.css';
import brandData from './components/data/brand.json';

export default function Brands() {
  useEffect(() => {
    AOS.init({
      duration: 800, 
      once: true,    
    });
  }, []);

  return (
    <SectionWrapper>
      <SectionHeading text="Who we work with" />
      <div className={styles.logoContainer}>
        {brandData.map((brand, idx) => (
          <div
            key={idx}
            className={styles.logoItem}
            data-aos="fade-up"
            data-aos-delay={idx * 100} 
          >
            <LogoItem
              src={brand.src}
              alt={brand.name}
              width={brand.width}
              height={brand.height}
            />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
