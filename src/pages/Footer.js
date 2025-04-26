import React from "react";
import styles from "./components/css/Footer.module.css";
import footerData from "./components/data/footer.json";
import SocialIconList from "./components/reuseComponent/SocialIconList";
import FooterLinkSection from "./components/reuseComponent/FooterLinkSection";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
      <div className={styles.footerTop}>
      <p style={{fontSize:'19px', fontWeight:'700'}}>Software Recruitment co.</p>
      <SocialIconList icons={footerData.socialIcons || []} />
    </div>

        <div className={styles.footerLinksWrapper}>
          <FooterLinkSection
            title="Explore"
            links={footerData.exploreLinks || []}
          />
          <FooterLinkSection
            title="Sectors"
            links={footerData.sectorLinks || []}
          />
          <FooterLinkSection
            title="Services"
            links={footerData.serviceLinks || []}
          />
        </div>
      </div>
    </footer>
  );
}
