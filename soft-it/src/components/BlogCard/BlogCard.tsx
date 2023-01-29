import { IBlog } from "@/interfaces/blog.interface";
import classNames from "classnames";
import Link from "next/link";
import { FC, memo } from "react";
import CustomIcon from "../Common/CustomIcon";
import classes from './BlogCard.module.scss';
import dayjs from 'dayjs';

interface BlogCardProps {
  blog: IBlog; 
}

const BlogCard: FC<BlogCardProps> = (props) => {
  const { blog } = props;
  return (
    <Link href={`/blog/${blog.id}`} title={blog.title}>
      <div className={classes.blog} tabIndex={0} role="article">
        <div className={classes.imageWrapper}>
          <figure>
            <img src={blog.image} alt={blog.title} />
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
            {blog.description}
          </p>
          <div className={classes.group}>
            <div className={classes.item}>
              <CustomIcon name="calendar" />
              {dayjs(blog.updatedAt).format('DD.MM.YYYY')}
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