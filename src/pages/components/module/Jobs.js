import React from "react";
import styles from '../../../pages/components/css/Jobs.module.css';
import { jobCards } from '../data/jobs.js';
import JobList from '../reuseComponent/JobList';
import PaginationControls from '../reuseComponent/PaginationControls';

export default function Jobs() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Latest Jobs</h2>
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
