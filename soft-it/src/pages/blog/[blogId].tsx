import Layout from "@/components/Common/Layout";
import SingleBlog from "@/components/SingleBlog/SingleBlog";
import { NextPage } from "next";

const SingleBlogPage: NextPage = () => {
  return (
    <Layout>
      <main>
        <SingleBlog />
      </main>
    </Layout>
  );
};

export default SingleBlogPage;