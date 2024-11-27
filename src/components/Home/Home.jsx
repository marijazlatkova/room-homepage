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
    <div id="home"
      className={styles.homeContainer}
      onKeyDown={onKeyboardArrowPress}
      {...swipeOptions}
    >
      {homeData.map((data, i) => (
        <div
          key={i}
          className={`${styles.slide} ${i === currentSlide ? styles.active : ""}`}
        >
          <div className={styles.homeContent}>
            <img
              className={styles.desktop}
              src={data.images.desktop}
              alt={`Desktop view of slide ${i + 1}`}
            />
            <img
              className={styles.mobile}
              src={data.images.mobile}
              alt={`Mobile view of slide ${i + 1}`}
            />
            <div className={styles.arrows}>
              <button
                className={`${styles.slideButton} ${styles.left}`}
                aria-label="Previous slide"
                onClick={goToPreviousSlide}
              >
                <img src={left} alt="Left arrow for previous slide" />
              </button>
              <button
                className={`${styles.slideButton} ${styles.right}`}
                aria-label="Next slide"
                onClick={goToNextSlide}
              >
                <img src={right} alt="Right arrow for next slide" />
              </button>
            </div>
          </div>
          <div className={styles.homeDetails}>
            <h2 className={styles.homeTitle}>{data.title}</h2>
            <p className={styles.homeText}>{data.text}</p>
            {i === 0 && <div id="shop" className={styles.shopContainer}>{children}</div>}
            {i !== 0 && <div className={styles.shopContainer}>{children}</div>}
          </div>
        </div>
      ))}
    </div>
  );
};
