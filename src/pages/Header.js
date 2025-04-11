import React, { useState, useEffect, useRef } from "react";
import { Menu } from "lucide-react";
import RoundedButton from "./components/reuseComponent/RoundedButton";
import NavigationLink from "./components/reuseComponent/NavigationLink";
import MobileDropdownMenu from "./components/reuseComponent/MobileDropdownMenu";
import LogoTitle from "./components/reuseComponent/LogoTitle";
import styles from "./components/css/Header.module.css";
import { menuItemsMobile, menuItemsDesktop } from "./components/data/header.json";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Mobile View */}
        <div className={styles.mobileMenuContainer}>
          <button
            ref={buttonRef}
            className={styles.mobileMenuButton}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <Menu size={24} />
          </button>
          {isDropdownOpen && (
            <MobileDropdownMenu items={menuItemsMobile} dropdownRef={dropdownRef} />
          )}
        </div>

        <div className={styles.logoContainerMobile}>
          <LogoTitle />
        </div>

        {/* Desktop View */}
        <div className={styles.desktopMenuContainer}>
          <div className={styles.desktopLogoContainer}>
            <LogoTitle />
          </div>
          <nav className={styles.desktopMenu}>
            {menuItemsDesktop.map((item, idx) => (
              <NavigationLink key={idx} label={item} className={styles.desktopMenuItem} />
            ))}
          </nav>
          <div className={styles.buttonGroup}>
            <RoundedButton label="Contact us" />
            <RoundedButton label="Upload CV" color="#F99D76" />
          </div>
        </div>
      </div>
    </header>
  );
}
