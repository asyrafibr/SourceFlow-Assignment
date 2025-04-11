// components/PaginationControls.js
import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import styles from '../../components/css/Jobs.module.css';

export default function PaginationControls() {
  return (
    <div className={styles.buttonGroup}>
      <button className={`btn btn-outline-secondary ${styles.circleButton} me-2`}>
        <ArrowLeft size={16} />
      </button>
      <button className={`btn btn-outline-secondary ${styles.circleButton}`}>
        <ArrowRight size={16} />
      </button>
    </div>
  );
}
