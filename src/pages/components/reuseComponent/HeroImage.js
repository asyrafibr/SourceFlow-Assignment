
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
        {/* Red Circle */}
        <div className={styles.redCircleWrapper}>
          <Image
            src={redCircle}
            alt="Red Circle"
            layout="fill"
            objectFit="contain"
            className="img-fluid"
          />
        </div>
        {/* Yellow Circle */}
        <div className={styles.yellowCircleWrapper}>
          <Image
            src={yellowCircle}
            alt="Yellow Circle"
            layout="fill"
            objectFit="contain"
            className="img-fluid"
          />
        </div>
        {/* Front Image */}
        <div className={styles.frontImageWrapper}>
          <Image
            src={forntImage}
            alt="Candidate"
            width={320}
            height={300}
            className="img-fluid rounded w-100"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroImages;