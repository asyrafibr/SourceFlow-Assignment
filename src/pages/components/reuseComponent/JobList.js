// components/JobList.js
import React from "react";
import JobCard from "../reuseComponent/JobsCard";
import styles from '../../components/css/Jobs.module.css';

export default function JobList({ jobs }) {
  return (
    <div className={styles.grid}>
      {jobs.map((job, idx) => (
        <JobCard job={job} idx={idx} key={idx} />
      ))}
    </div>
  );
}
