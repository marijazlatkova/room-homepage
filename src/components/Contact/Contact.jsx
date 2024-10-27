import styles from "./Contact.module.scss";

export const Contact = () => {
  return (
    <div id="contact">
      <div className={styles.attribution}>
        Challenge by
        <a
          className={styles.link}
          href="https://www.frontendmentor.io/challenges/room-homepage-BtdBY_ENq/hub"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by
        <a
          className={styles.link}
          href="https://github.com/marijazlatkova"
          target="_blank"
        >
          Marija Zlatkova
        </a>
        .
      </div>
    </div>
  );
};
