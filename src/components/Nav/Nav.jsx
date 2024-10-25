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
    <div id="nav">
      <div className={styles.navContainer}>
        <div className={styles.nav}>
          <img
            className={styles.menu}
            onClick={toggleMenu}
            src={isOpen ? close : hamburger}
          />
          <a href="#home">
            <img className={styles.logo} src={logo} />
          </a>
          <div className={`${styles.links} ${isOpen ? styles.show : ""}`}>
            <a href="#home">Home</a>
            <a href="#shop">Shop</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>
    </div>
  );
};
