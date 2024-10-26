import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { homeData } from "../../data/texts";
import { images } from "../../data/images";
import styles from "./Home.module.scss";

export const Home = ({ children }) => {
  const { left, right } = images;
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentSlide((i) => (i - 1 < 0 ? homeData.length - 1 : i - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((i) => (i + 1 >= homeData.length ? 0 : i + 1));
  };

  const swipeOptions = useSwipeable({
    onSwipedLeft: goToNextSlide,
    onSwipedRight: goToPreviousSlide,
  });

  const onKeyboardArrowPress = (e) => {
    if (e.key === "ArrowLeft") goToPreviousSlide();
    else if (e.key === "ArrowRight") goToNextSlide();
  };

  return (
    <div id="home">
      <div
        className={styles.homeContainer}
        onKeyDown={onKeyboardArrowPress}
        {...swipeOptions}
      >
        {homeData.map((data, i) => (
          <div
            key={i}
            className={`${styles.slide} ${
              i === currentSlide ? styles.active : ""
            }`}
          >
            <div className={styles.homeContent}>
              <img className={styles.desktop} src={data.images.desktop} />
              <img className={styles.mobile} src={data.images.mobile} />
              <div className={styles.arrows}>
                <button className={`${styles.slideButton} ${styles.left}`}>
                  <img src={left} onClick={goToPreviousSlide} />
                </button>
                <button className={`${styles.slideButton} ${styles.right}`}>
                  <img src={right} onClick={goToNextSlide} />
                </button>
              </div>
            </div>
            <div className={styles.homeDetails}>
              <h1 className={styles.homeTitle}>{data.title}</h1>
              <p className={styles.homeText}>{data.text}</p>
              <div className={styles.shopContainer}>{children}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
