import { IBlog, IBlogCategory } from "@/interfaces/blog.interface";
import classNames from "classnames";
import { FC, memo, useEffect, useState } from "react";
import Tags from "../Tags/Tags";
import classes from './BlogsContainer.module.scss';
import BlogCard from "../BlogCard/BlogCard";
import { useTranslation } from "next-i18next";

interface BlogsContainerProps {
  blogs: IBlog[];
  blogCategories: IBlogCategory[];
}

const BlogsContainer: FC<BlogsContainerProps> = (props) => {
  const { t } = useTranslation();
  const { blogs, blogCategories, } = props;

  const allBlogsType = t('all');
  const [activeTag, setActiveTag] = useState<string>(allBlogsType);
  const [filteredBlogs, setFilteredBlogs] = useState<IBlog[]>([]);

  const tagItems = [allBlogsType, ...blogCategories.map(({ title }) => title)];

  useEffect(() => {
    if (activeTag === allBlogsType) {
      setFilteredBlogs(blogs);
    } else {
      const filteredBlogs = blogs.filter(({ blog_category_title }) => (
        blog_category_title === activeTag
      ));
      setFilteredBlogs(filteredBlogs);
    }
  }, [activeTag, tagItems, allBlogsType]);

  const blogEls = filteredBlogs.map((blog) => {
    return (
      <BlogCard key={blog.id} blog={blog} />
    );
  });

  return (
    <section className={classNames('page-section', classes.blogs)}>
      <div className="container">
        <div className="page-section__head">
          <h1 className="heading heading--xlg">
            {t('blog')}
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