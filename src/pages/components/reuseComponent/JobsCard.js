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
          <span className={styles.badge} style={{ color: job.textColor}}>
            <Image src={job.iconLanguage} alt="Badge Icon" width="10" height="10" />
            {job.badge}
          </span>
          <p className={styles.cardTitle}>{job.title}</p>
          <ul className={styles.detailList}>
            <li className={styles.detailItem}>
              <Image src={job.locationLogo} alt="Location" width="20" height="20" />
              {job.location}
            </li>
            <li className={styles.detailItem}>
              <Image src={job.wageLogo} alt="Wage" width="20" height="20" />
              {job.wage}
            </li>
          </ul>
          <p className={styles.jobDetail}>{job.detail}</p>
          <button className={`btn btn-light ${styles.jobButton}`}>
            View this job
          </button>
          <p className={styles.postedDate}>{job.posted}</p>
        </div>
      </div>
    </div>
  );
}
