import { images } from "../../data/images";
import styles from "./Shop.module.scss";

export const Shop = () => {
  const { arrow } = images;
  return (
    <section>
      <div className={styles.shopContainer}>
        <button className={styles.shopButton} aria-label="Shop Now">
          SHOP NOW
        </button>
        <img className={styles.arrow} src={arrow} alt="Arrow Icon" />
      </div>
    </section>
  );
};
