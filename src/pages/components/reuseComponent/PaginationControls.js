import React from "react";
import styles from "../../components/css/Jobs.module.css";
import arrowLeft from "../../../../public/images/ArrowLeft.png";
import arrowRight from "../../../../public/images/ArrowRight.png";
import Image from "next/image";

export default function PaginationControls() {
  return (
    <div className={styles.buttonGroup}>
      <button
        className={`btn btn-outline-secondary ${styles.circleButton} me-2`}
        disabled={true}
      >
        <Image src={arrowLeft} alt="Arrow Left" />
      </button>
      <button className={`btn btn-outline-secondary ${styles.circleButton}`}>
        <Image src={arrowRight} alt="Arrow Right" />
      </button>
    </div>
  );
}
