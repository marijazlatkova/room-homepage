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
          rel="noopener noreferrer"
          aria-label="Visit the challenge page on Frontend Mentor"
        >
          Frontend Mentor
        </a>
        . Coded by
        <a
          className={styles.link}
          href="https://github.com/marijazlatkova"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Marija Zlatkova's GitHub profile"
        >
          Marija Zlatkova
        </a>
        .
      </div>
    </div>
  );
};
