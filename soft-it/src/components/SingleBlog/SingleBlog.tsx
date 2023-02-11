import { IBlog } from "@/interfaces/blog.interface";
import { FC, memo, useState } from "react";
import classes from "./SingleBlog.module.scss";
import classNames from "classnames";
import CustomIcon from "../Common/CustomIcon";
import { Swiper, SwiperSlide } from "swiper/react";
import BlogCard from "../BlogCard/BlogCard";
import SafeHydrate from "../Common/SafeHydrate";
import SliderDots from "../SliderDots/SliderDots";

interface SingleBlogProps { 
  blog: IBlog;
  recommended?: IBlog[];
}

const SingleBlog: FC<SingleBlogProps> = (props) => {
  const { blog, recommended = [] } = props;
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const recommendedItems = recommended.map((blog) => {
    return (
      <SwiperSlide className={classes.slide} key={blog.id}>
        <BlogCard blog={blog} />
      </SwiperSlide>
    );
  });

  return (
    <section className={classNames(classes.blog, 'page-section')}>
      <div className="container">
        <div className={classes.header}>
          <figure>
            <img src={blog.banner_image_url} alt="Blog Image" />
          </figure>
          <div className={classes.headerContent}>
            <h1 className="heading heading--3">
              {blog.title}
            </h1>
            <div className={classes.infoGroup}>
              <div className={classes.group}>
                <CustomIcon name="calendar" />
                {blog.published_date}
              </div>
              <div className={classes.group}>
                <CustomIcon name="eye" />
                {blog.views}
              </div>
            </div>
          </div>
        </div>
        <p 
          className={classNames(classes.text, "text")}
          dangerouslySetInnerHTML={{ __html: blog.description }}
        />
      </div>
      {recommended.length > 0 && (
        <div className={classes.recommended}>
          <h2 className="heading heading--3">
            Recommended
          </h2>
          <SafeHydrate style={{ width: '100%' }}>
            <Swiper 
              onRealIndexChange={(sw) => setActiveSlideIndex(sw.realIndex)}
              spaceBetween={20}
              centeredSlides
              loop
              slidesPerView={1}
              breakpoints={{
                1400: {
                  slidesPerView: 2.75,
                },
                1025: {
                  slidesPerView: 2.35,
                },
                769: {
                  freeMode: true,
                  slidesPerView: 1.5
                }
              }}
              className={classes.slider}
            >
              {recommendedItems}
            </Swiper>
          </SafeHydrate>
          <SliderDots
            dotsCount={recommendedItems.length}
            activeIndex={activeSlideIndex}
            className={classes.dots}
          />
        </div>
      )}
    </section>
  );
};

export default memo(SingleBlog);