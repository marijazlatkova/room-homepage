import { aboutData } from "../../data/texts";
import styles from "./About.module.scss";

export const About = () => {
  return (
    <div id="about">
      {aboutData.map((data, i) => (
        <div className={styles.aboutContainer} key={i}>
          <img
            className={`${styles.aboutImage} ${styles.dark}`}
            src={data.images.aboutDark}
          />
          <div className={styles.aboutDetails}>
            <h1 className={styles.aboutTitle}>{data.title}</h1>
            <p className={styles.aboutText}>{data.text}</p>
          </div>
          <img
            className={`${styles.aboutImage} ${styles.light}`}
            src={data.images.aboutLight}
          />
        </div>
      ))}
    </div>
  );
};
