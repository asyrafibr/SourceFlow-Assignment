  import React from 'react';
  import styles from '../../components/css/Footer.module.css';
  import { socialIcons, exploreLinks, sectorLinks, serviceLinks } from '../data/footer';
  import SocialIconList from '../reuseComponent/SocialIconList';
  import FooterLinkSection from '../reuseComponent/FooterLinkSection';

  export default function Footer() {
    return (
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div>
            <h7>Software Recruitment co.</h7>
            <SocialIconList icons={socialIcons} />
          </div>

          <FooterLinkSection title="Explore" links={exploreLinks} />
          <FooterLinkSection title="Sectors" links={sectorLinks} />
          <FooterLinkSection title="Services" links={serviceLinks} />
        </div>
      </footer>
    );
  }
