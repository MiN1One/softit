import { FC, memo, useEffect, useMemo, useRef, useState } from "react";
import classes from './AboutContainer.module.scss';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import image1 from '@assets/images/slide1.png';
import image2 from '@assets/images/slide2.png';
import image3 from '@assets/images/slide3.png';
import image4 from '@assets/images/slide4.png';
import CustomIcon from "../Common/CustomIcon";
import classNames from "classnames";
import { Navigation } from 'swiper';
import SafeHydrate from "../Common/SafeHydrate";
import SliderDots from "../SliderDots/SliderDots";
import { IAboutPageData } from "@/interfaces/about.interface";
import { useGlobalContext } from "@/contexts/GlobalContext";
import { useTranslation } from "next-i18next";

const slides = [
  image1.src,
  image2.src,
  image3.src,
  image4.src,
];

interface AboutContainerProps {
  data: IAboutPageData;
}

const AboutContainer: FC<AboutContainerProps> = (props) => {
  const { data } = props;
  const swiperRef = useRef<SwiperRef | null>(null);
  const {  } = useGlobalContext();
  const { t } = useTranslation();
  const [activeSlide, setActiveSlide] = useState(0);

  const slideEls = data.images.map((slide) => {
    return (
      <SwiperSlide className={classes.slide} key={slide.id}>
        <img
          src={slide.image_url}
          alt={slide.content}
          width="100%"
          height="100%"
        />
      </SwiperSlide>
    );
  });

  const btnControlLeftClass = classNames(
    classes.btnControl, 
    classes.btnControlLeft
  );
  const btnControlRightClass = classNames(
    classes.btnControl, 
    classes.btnControlRight
  );

  return (
    <section className={classNames(classes.about, "page-section")}>
      <div className="container">
        <div className="page-section__head">
          <h1 className="heading heading--1">
            About IT Soft
          </h1>
        </div>
        <div className={classes.body}>
          <div className={classes.textContainer}>
            <h2 className="heading heading--2">
              {t('about')}
            </h2>
            <p 
              className="text tex--lg" 
              dangerouslySetInnerHTML={{ __html: data.description }}
            />
          </div>
          <div className={classes.sliderWrapper}>
            <div className={classes.sliderHead}>
              <h3 className="heading heading--4">
                {t('teamPhotos')}
              </h3>
              <p className={classNames(classes.text, "text text--sm")}>
                {t('aboutPhotoDescription')}
              </p>
            </div>
            <SafeHydrate>
              <Swiper
                loop
                ref={swiperRef}
                centeredSlides
                onSlideChange={(sw) => setActiveSlide(sw.realIndex)}
                className={classes.slides}
                slidesPerView={1.75}
                modules={[Navigation]}
                breakpoints={{
                  500: {
                    slidesPerView: 2.25
                  },
                  700: {
                    slidesPerView: 3.35
                  },
                }}
                spaceBetween={20}
                navigation={{
                  prevEl: `.${classes.btnControlLeft}`,
                  nextEl: `.${classes.btnControlRight}`,
                }}
              >
                {slideEls}
                <button className={btnControlLeftClass}>
                  <CustomIcon name="arrow-left" />
                </button>
                <button className={btnControlRightClass}>
                  <CustomIcon name="arrow-right" />
                </button>
              </Swiper>
            </SafeHydrate>
            <SliderDots
              dotsCount={slideEls.length}
              activeIndex={activeSlide}
              onClick={(index) => swiperRef.current?.swiper.slideToLoop(index)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};  

export default memo(AboutContainer);