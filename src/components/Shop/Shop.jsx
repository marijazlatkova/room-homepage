import { images } from "../../data/images";
import styles from "./Shop.module.scss";

export const Shop = () => {
  const { arrow } = images;
  return (
    <div id="shop">
      <div className={styles.shopContainer}>
        <button className={styles.shopButton}>SHOP NOW</button>
        <img className={styles.arrow} src={arrow} />
      </div>
    </div>
  );
};
