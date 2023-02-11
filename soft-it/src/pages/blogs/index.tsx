import BlogsContainer from "@/components/BlogsContainer/BlogsContainer";
import Layout from "@/components/Common/Layout";
import { IBlog, IBlogCategory } from "@/interfaces/blog.interface";
import { fetchData, fetchMainData } from "@/utils/fetch.utils";
import { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

interface BlogPageProps {
  blogs: IBlog[];
  blogCategories: IBlogCategory[];
}

const BlogsPage: NextPage<BlogPageProps> = (props) => (
  <Layout>
    <main>
      <BlogsContainer 
        blogCategories={props.blogCategories} 
        blogs={props.blogs}
      />
    </main>
  </Layout>
);

export const getStaticProps: GetStaticProps<BlogPageProps> = async (ctx) => {
  const locale = ctx.locale || ctx.defaultLocale || 'uz';
  const [translations, headData, blogs, blogCategories] = await Promise.all([
    serverSideTranslations(locale),
    fetchMainData(locale),
    fetchData('/blogs', locale),
    fetchData('/blog-categories', locale)
  ]);

  return {
    props: {
      ...translations,
      headData,
      blogs,
      blogCategories
    },
    revalidate: 100,
  };
};

export default BlogsPage;