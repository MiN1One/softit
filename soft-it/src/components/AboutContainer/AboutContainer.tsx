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

const slides = [
  image1.src,
  image2.src,
  image3.src,
  image4.src,
];

const AboutContainer:FC = () => {
  const swiperRef = useRef<SwiperRef | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const slideEls = slides.map((slide, index) => {
    return (
      <SwiperSlide className={classes.slide} key={index}>
        <img
          src={slide}
          alt="Slide Image"
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

  const dotEls = useMemo(() => (
    Array.from(Array(slideEls.length).keys()).map(index => {
      return (
        <span 
          tabIndex={0}
          className={classNames({ [classes.active]: index === activeSlide })}
          key={index} 
          onClick={() => swiperRef.current?.swiper.slideToLoop(index)}
        />
      );
    })
  ), [activeSlide, slideEls]);

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
              About us
            </h2>
            <p className="text tex--lg">
              The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
              <br /><br />
              All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
            </p>
          </div>
          <div className={classes.sliderWrapper}>
            <div className={classes.sliderHead}>
              <h3 className="heading heading--4">
                Photos from our team
              </h3>
              <p className={classNames(classes.text, "text text--sm")}>
                All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. 
              </p>
            </div>
            <Swiper
              loop
              ref={swiperRef}
              centeredSlides
              onSlideChange={(sw) => setActiveSlide(sw.realIndex)}
              className={classes.slides}
              slidesPerView={3.35}
              modules={[Navigation]}
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
            <div className={classes.sliderDots}>
              {dotEls}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};  

export default memo(AboutContainer);