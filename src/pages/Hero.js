import React from "react";
import styles from "./components/css/Hero.module.css";
import HeroInputGroup from "./components/reuseComponent/HeroInputGroup";
import HeroImages from "./components/reuseComponent/HeroImage";

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <div className={styles.heroTextWrapper}>
          <p style={{fontSize:"16px",fontWeight:400}}>Software Recruitment Specialists</p>
          <p className={styles.mainTitle}>Elevate your career</p>
          <HeroInputGroup />
        </div>

        <HeroImages />
      </div>
    </section>
  );
};

export default Hero;
