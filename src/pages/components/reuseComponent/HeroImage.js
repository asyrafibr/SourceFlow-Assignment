import React from "react";
import Image from "next/image";
import forntImage from "../../../../public/images/frontHome.png";
import yellowCircle from "../../../../public/images/Group 1.png";
import redCircle from "../../../../public/images/Ellipse 1.png";
import styles from "../css/Hero.module.css";

const HeroImages = () => {
  return (
    <div className={styles.heroImageWrapper}>
      <div className={styles.imageContainer}>
        <div className={styles.redCircleWrapper}>
          <Image
            src={redCircle}
            alt="Red Circle"
            layout="fill"
            objectFit="contain"
            className="img-fluid"
          />
        </div>
        <div className={styles.yellowCircleWrapper}>
          <Image
            src={yellowCircle}
            alt="Yellow Circle"
            layout="fill"
            objectFit="contain"
            className="img-fluid"
          />
        </div>
        <div className={styles.frontImageWrapper}>
          <Image
            src={forntImage}
            alt="Candidate"
            width={507}
            height={600}
            className={styles.customImage}

          />
        </div>
      </div>
    </div>
  );
};

export default HeroImages;
