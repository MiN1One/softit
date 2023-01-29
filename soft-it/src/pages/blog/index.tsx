import BlogsContainer from "@/components/BlogsContainer/BlogsContainer";
import Layout from "@/components/Common/Layout";
import { NextPage } from "next";

const BlogsPage: NextPage = () => {

  return (
    <Layout>
      <main>
        <BlogsContainer />
      </main>
    </Layout>
  );
};

export default BlogsPage;