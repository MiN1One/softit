import { IBlog } from "@/interfaces/blog.interface";
import classNames from "classnames";
import Link from "next/link";
import { FC, memo } from "react";
import CustomIcon from "../Common/CustomIcon";
import classes from './BlogCard.module.scss';

interface BlogCardProps {
  blog: IBlog; 
}

const BlogCard: FC<BlogCardProps> = (props) => {
  const { blog } = props;
  return (
    <Link href={`/blogs/${blog.id}`} title={blog.title}>
      <div className={classes.blog} tabIndex={0} role="article">
        <div className={classes.imageWrapper}>
          <figure>
            <img src={blog.cover_image_url} alt={blog.title} />
          </figure>
        </div>
        <div className={classes.infoGroup}>
          <span className={classNames(
            classes.title, 
            "text text--light text--lg"
          )}>
            {blog.title}
          </span>
          <p className={classNames(
            classes.description, 
            "text text--xs tex--sub"
          )}>
            {blog.short_description}
          </p>
          <div className={classes.group}>
            <div className={classes.item}>
              <CustomIcon name="calendar" />
              {blog.published_date}
            </div>
            <div className={classes.item}>
              <CustomIcon name="eye" />
              {blog.views}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};  

export default memo(BlogCard);