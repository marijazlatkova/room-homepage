import { useState } from "react";
import { images } from "../../data/images";
import styles from "./Nav.module.scss";

export const Nav = () => {
  const { hamburger, close, logo } = images;
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <nav>
      <div className={styles.navContainer}>
        <div className={styles.nav}>
          <img
            className={styles.menu}
            onClick={toggleMenu}
            src={isOpen ? close : hamburger}
            alt={isOpen ? "Close menu icon" : "Open menu icon"}
          />
          <a href="#home" aria-label="Go to home page">
            <img className={styles.logo} src={logo} alt="Logo" />
          </a>
          <div className={`${styles.links} ${isOpen ? styles.show : ""}`}>
            <a href="#home" aria-label="Navigate to Home section">
              Home
            </a>
            <a href="#shop" aria-label="Navigate to Shop section">
              Shop
            </a>
            <a href="#about" aria-label="Navigate to About section">
              About
            </a>
            <a href="#contact" aria-label="Navigate to Contact section">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
