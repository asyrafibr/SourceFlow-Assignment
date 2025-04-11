// components/JobCard.js
import React from "react";
import Image from "next/image";
import styles from '../../components/css/Jobs.module.css';

export default function JobCard({ job, idx }) {
  if (!job) {
    return <div>No job data available</div>;
  }
  return (
    <div className={styles.col}>
      <div
        className={styles.card}
        style={{
          backgroundColor: job.backgroundColor,
          color: idx % 2 === 0 ? "#064EA4" : "#FFFFFF"
        }}
      >
        <div className={styles.cardContent}>
          <span className={styles.badge} style={{ color: job.textColor }}>
            <Image src={job.iconLanguage} alt="Badge Icon" width="16" height="16" />
            {job.badge}
          </span>
          <h5 className={styles.cardTitle}>{job.title}</h5>
          <ul className={styles.detailList}>
            <li className={styles.detailItem}>
              <Image src={job.locationLogo} alt="Location" width="13" height="16" />
              {job.location}
            </li>
            <li className={styles.detailItem}>
              <Image src={job.wageLogo} alt="Wage" width="17" height="16" />
              {job.wage}
            </li>
          </ul>
          <h5 className={styles.jobDetail}>{job.detail}</h5>
          <button className={`btn btn-light ${styles.jobButton}`}>
            View the job
          </button>
          <h5 className={styles.postedDate}>{job.posted}</h5>
        </div>
      </div>
    </div>
  );
}
