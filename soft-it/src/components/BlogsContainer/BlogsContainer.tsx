import { IBlog } from "@/interfaces/blog.interface";
import classNames from "classnames";
import { FC, memo, useState } from "react";
import Tags from "../Tags/Tags";
import classes from './BlogsContainer.module.scss';
import image from '@assets/images/Rectangle 37.png';
import BlogCard from "../BlogCard/BlogCard";

const tagItems = ['all', 'Holidy', 'News', 'Development'];
const blogs: IBlog[] = [
  {
    title: 'Next achievement of Soft IT Group',
    description: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. ',
    html: '',
    updatedAt: '2023-01-29T05:28:06.413Z',
    views: 125,
    image: image.src,
    id: '1'
  },
  {
    title: 'Next achievement of Soft IT Group',
    description: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. ',
    html: '',
    updatedAt: '2023-01-29T05:28:06.413Z',
    views: 125,
    image: image.src,
    id: '1'
  },
  {
    title: 'Next achievement of Soft IT Group',
    description: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. ',
    html: '',
    updatedAt: '2023-01-29T05:28:06.413Z',
    views: 125,
    image: image.src,
    id: '1'
  },
  {
    title: 'Next achievement of Soft IT Group',
    description: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. ',
    html: '',
    updatedAt: '2023-01-29T05:28:06.413Z',
    views: 125,
    image: image.src,
    id: '1'
  },
  {
    title: 'Next achievement of Soft IT Group',
    description: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. ',
    html: '',
    updatedAt: '2023-01-29T05:28:06.413Z',
    views: 125,
    image: image.src,
    id: '1'
  },
  {
    title: 'Next achievement of Soft IT Group',
    description: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. ',
    html: '',
    updatedAt: '2023-01-29T05:28:06.413Z',
    views: 125,
    image: image.src,
    id: '1'
  },
];

const BlogsContainer: FC = () => {
  const [activeTag, setActiveTag] = useState('all');

  const blogEls = blogs.map((blog, index) => {
    return (
      <BlogCard key={index} blog={blog} />
    );
  });

  return (
    <section className={classNames('page-section', classes.blogs)}>
      <div className="container">
        <div className="page-section__head">
          <h1 className="heading heading--xlg">
            Blog
          </h1>
        </div>
        <div className="page-section__body">
          <Tags 
            items={tagItems} 
            onClickTag={setActiveTag} 
            activeTag={activeTag}
          />
          <div className={classes.list}>
            {blogEls}
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(BlogsContainer);