import { IBlog } from "@/interfaces/blog.interface";
import { FC, memo } from "react";
import classes from "./SingleBlog.module.scss";
import image from '@assets/images/image 2.png';
import classNames from "classnames";
import CustomIcon from "../Common/CustomIcon";
import dayjs from "dayjs";

const blog: IBlog = {
  title: 'Next achievement of Soft IT Group',
  description: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. ',
  html: `The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. <br /><br />All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`,
  updatedAt: '2023-01-29T05:28:06.413Z',
  views: 125,
  image: image.src,
  id: '1'
};

const SingleBlog: FC = () => {
  return (
    <section className={classNames(classes.blog, 'page-section')}>
      <div className="container">
        <div className={classes.header}>
          <figure>
            <img src={image.src} alt="Blog Image" />
          </figure>
          <div className={classes.headerContent}>
            <h1 className="heading heading--3">
              {blog.title}
            </h1>
            <div className={classes.infoGroup}>
              <div className={classes.group}>
                <CustomIcon name="calendar" />
                {dayjs(blog.updatedAt).format('DD.MM.YYYY')}
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
          dangerouslySetInnerHTML={{ __html: blog.html }}
        />
      </div>
    </section>
  );
};

export default memo(SingleBlog);