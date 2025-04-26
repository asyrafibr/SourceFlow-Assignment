import React from "react";
import styles from './components/css/Jobs.module.css';
import jobCards  from './components/data/jobs.json';
import JobList from './components/reuseComponent/JobList';
import PaginationControls from './components/reuseComponent/PaginationControls';
export default function Jobs() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.title}>Latest Jobs</p>
        <JobList jobs={jobCards} />
        <div className={styles.navButtons}>
          <PaginationControls />
          <div className={styles.viewMore}>
            <a href="#">View more jobs</a>
          </div>
        </div>
      </div>
    </section>
  );
}
