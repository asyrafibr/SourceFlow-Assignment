import React from "react";
import styles from "./components/css/Hero.module.css";
import HeroInputGroup from "./components/reuseComponent/HeroInputGroup";
import HeroImages from "./components/reuseComponent/HeroImage";

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <div className={styles.heroTextWrapper}>
          <p>Software Recruitment Specialists</p>
          <h1>Elevate your career.</h1>
          <HeroInputGroup />
        </div>

        <HeroImages />
      </div>
    </section>
  );
};

export default Hero;
