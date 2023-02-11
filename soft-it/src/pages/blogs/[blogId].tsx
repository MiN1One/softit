import Layout from "@/components/Common/Layout";
import SingleBlog from "@/components/SingleBlog/SingleBlog";
import { IBlog, ISingleBlog } from "@/interfaces/blog.interface";
import { fetchData, fetchMainData } from "@/utils/fetch.utils";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

interface SinglePageProps {
  blog: ISingleBlog;
}

const SingleBlogPage: NextPage<SinglePageProps> = (props) => (
  <Layout>
    <main>
      <SingleBlog 
        blog={props.blog.blog}
        recommended={props.blog.recommended}
      />
    </main>
  </Layout>
);

export const getStaticPaths: GetStaticPaths = async ({ locales = [] }) => {
  const promises = locales.map(async locale => {
    const blogs = await fetchData<IBlog[]>('/blogs', locale);
    return blogs.map(({ id }) => ({
      params: { blogId: id.toString() },
      locale
    }));
  });
  const paths = (await Promise.all(promises!)).flat();
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<SinglePageProps> = async (ctx) => {
  const locale = ctx.locale || ctx.defaultLocale || 'uz';

  const [translations, headData, blog] = await Promise.all([
    serverSideTranslations(locale),
    fetchMainData(locale),
    fetchData<ISingleBlog>('/blogs/' + ctx.params?.blogId, locale)
  ]);

  return {
    props: {
      ...translations,
      headData,
      blog,
      meta: {
        title: blog.blog.title,
        description: blog.blog.description.slice(0, 1000)
      }
    },
    revalidate: 200,
  };
};

export default SingleBlogPage;